import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  setToken: ['token'],
  setUserLogged: ['isValid'],
  fetchUser: ['loginData', 'callBack'],
  fetchList: ['token', 'page', 'listCallBack'],
});

export const userAction = Types;
export default Creators;
