// @flow
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware, { Saga } from 'redux-saga';
import reducerRegistry from './reducerRegistry';
import sagaRegistry from './sagaRegistry';

const initialState = {};

const combine = reducers => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};

function* rootSaga(): Saga<all> {
  yield all(sagas);
}

const reducer = combine(reducerRegistry.getReducers());
const sagas = Object.values(sagaRegistry.getSagas()).map(saga => fork(saga));
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__
      ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
      : [])
  )
);

sagaMiddleware.run(rootSaga);

reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});

sagaRegistry.setChangeListener(saga => {
  sagaMiddleware.run(saga);
});

export default store;
