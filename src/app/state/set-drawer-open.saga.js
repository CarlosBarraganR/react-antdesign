// @flow
import { Saga } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import { SET_DRAWER_OPEN, SET_DRAWER_OPEN_SUCCESS } from '../app.reducer';
import sagaRegistry from '../../redux/sagaRegistry';

export const setDrawerOpenAction = (payload: string) => ({
  payload,
  type: SET_DRAWER_OPEN
});

function* setDrawerOpenWatcher(): Saga<takeLatest> {
  yield takeLatest(SET_DRAWER_OPEN, setDrawerOpenWorker);
}

function* setDrawerOpenWorker(action: Object) {
  yield put({ type: SET_DRAWER_OPEN_SUCCESS, payload: action.payload });
}

sagaRegistry.register('setDrawerOpenWatcher', setDrawerOpenWatcher);
