// @flow

import { Saga } from 'redux-saga';
import { takeLatest, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import sagaRegistry from '../../redux/sagaRegistry';
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from '../app.reducer';

export const userLoginAction = (payload: Object) => ({
  payload,
  type: USER_LOGIN
});

const getUserData = data => {
  console.log(data);
  const { username, password } = data;
  //   return axios({
  //     method: 'get',
  //     url: `/usuarios/${data.userId}`,
  //     params: { access_token: data.accessToken }
  //   });
  if (username === 'test@test.com' && password === 'pass123') {
    return {
      id: '2323333324332434',
      name: 'Test User',
      accessToken: 'jsdj234b32n4b3b4i32h43jjk44kj324',
      ttl: 12129230493049304
    };
  }
  return null;
};

export function* userLoginWatcher(): Saga<takeLatest> {
  yield takeLatest(USER_LOGIN, userLoginWorker);
}

function* userLoginWorker(action: Object) {
  try {
    const user = yield call(getUserData, action.payload);
    yield delay(2000);
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: user
    });
  } catch (error) {
    yield put({
      type: USER_LOGIN_FAILURE,
      payload: error.response
    });
  }
}

sagaRegistry.register('userLoginWatcher', userLoginWatcher);
