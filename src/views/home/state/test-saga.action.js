// @flow

import axios from 'axios';
import { Saga } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { dogsTestReducer } from '../home.view.reducer';
import { sagaRegistry } from '../../../redux/sagaRegistry';

const createActionName = name => `app/${dogsTestReducer.sliceName}/${name}`;

const API_CALL_REQUEST = createActionName('API_CALL_REQUEST');
const API_CALL_SUCCESS = createActionName('API_CALL_SUCCESS');
const API_CALL_FAILURE = createActionName('API_CALL_FAILURE');

// ACTION CREATOR
export const dogsTestApiCallAction = () => ({
  type: API_CALL_REQUEST
});

const dogsTestApiCall = () => {
  return axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
  });
};

export function* dogsTestApiCallWatcher(): Saga<takeLatest> {
  yield takeLatest(API_CALL_REQUEST, dogsTestApiCallWorker);
}
sagaRegistry.register(dogsTestApiCallWatcher);

function* dogsTestApiCallWorker() {
  try {
    const response = yield call(dogsTestApiCall);
    yield put({ type: API_CALL_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}

const updatedDogTestReducer = {
  [API_CALL_REQUEST]: state => {
    return {
      ...state,
      loading: true
    };
  },
  [API_CALL_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      dogUrl: action.payload.message
    };
  },
  [API_CALL_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
};

dogsTestReducer.updateReducer(updatedDogTestReducer);
