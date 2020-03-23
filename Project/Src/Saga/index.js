import {takeLatest, all} from 'redux-saga/effects';
import {userAction} from 'Src/Stores/Action';
import {fetchUser} from 'Src/Saga/userLoginSaga';
import {fetchList} from 'Src/Saga/ListSaga.js';

export default function* rootsaga() {
  yield all([
    takeLatest(userAction.FETCH_USER, fetchUser),
    takeLatest(userAction.FETCH_LIST, fetchList),
  ]);
}
