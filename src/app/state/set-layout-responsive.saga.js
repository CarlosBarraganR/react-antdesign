// @flow
import { Saga } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import {
  SET_LAYOUT_RESPONSIVE,
  SET_LAYOUT_RESPONSIVE_SUCCESS
} from '../app.reducer';
import sagaRegistry from '../../redux/sagaRegistry';

export const setLayoutResponsiveAction = (payload: string) => ({
  payload,
  type: SET_LAYOUT_RESPONSIVE
});

function* setLayoutResponsiveWatcher(): Saga<takeLatest> {
  yield takeLatest(SET_LAYOUT_RESPONSIVE, setLayoutResponsiveWorker);
}

function* setLayoutResponsiveWorker(action: Object) {
  yield put({ type: SET_LAYOUT_RESPONSIVE_SUCCESS, payload: action.payload });
}

sagaRegistry.register('setLayoutResponsiveWatcher', setLayoutResponsiveWatcher);
