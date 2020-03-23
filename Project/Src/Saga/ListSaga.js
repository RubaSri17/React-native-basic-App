import {call} from 'redux-saga/effects';
import {ApiService} from '../Network/ApiServices';
import Url from '../Constants/Url';

export function* fetchList(data) {
  const user = yield call(ApiService.getApi, Url.LIST + data.page, data.token);
  console.log('dataof List saga', user);

  if (user.status === 200) {
    console.log('usercallback for List', user);
    yield call(data.listCallBack, user.data.data);
  }
}
