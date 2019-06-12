// @flow

import axios from 'axios';
import { Saga } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from '../home.view.reducer';
import sagaRegistry from '../../../redux/sagaRegistry';

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

function* dogsTestApiCallWorker() {
  try {
    const response = yield call(dogsTestApiCall);
    yield put({ type: API_CALL_SUCCESS, dogUrl: response.data });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}

sagaRegistry.register('dogsTestApiCallWatcher', dogsTestApiCallWatcher);
