// @flow
import { Saga } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import {
  SET_SIDER_COLLAPSED,
  SET_SIDER_COLLAPSED_SUCCESS
} from '../app.reducer';
import sagaRegistry from '../../redux/sagaRegistry';

export const setSiderCollapsedAction = (payload: string) => ({
  payload,
  type: SET_SIDER_COLLAPSED
});

function* setSiderCollapsedWatcher(): Saga<takeLatest> {
  yield takeLatest(SET_SIDER_COLLAPSED, setSiderCollapsedWorker);
}

function* setSiderCollapsedWorker(action: Object) {
  yield put({ type: SET_SIDER_COLLAPSED_SUCCESS, payload: action.payload });
}

sagaRegistry.register('setSiderCollapsedWatcher', setSiderCollapsedWatcher);
