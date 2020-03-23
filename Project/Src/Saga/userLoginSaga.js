import {call, put} from 'redux-saga/effects';
import userAction from 'Src/Stores/Action.js';
import {ApiService} from '../Network/ApiServices';
import Url from '../Constants/Url';

export function* fetchUser(fetchData) {
  const user = yield call(ApiService.postApi, Url.LOGIN, fetchData.loginData);
  console.log('data', user);

  if (user.status === 200) {
    console.log('user', user);
    yield put(userAction.setToken(user.data.data));
    yield call(fetchData.callBack, user.data.data);
  } else if (user.status === 401 || user.status === 422) {
    yield call(fetchData.callBack, user.data);
  } else {
    yield call(fetchData.callBack, null);
  }
}
