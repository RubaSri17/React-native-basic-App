import {userAction} from 'Src/Stores/Action';
import {createReducer} from 'reduxsauce';

const initialState = {
  token: '',
  isValid: false,
};

export const setToken = (state, {token}) => ({
  ...state,
  token,
});

export const setUserLogged = (state, {isValid}) => ({
  ...state,
  isValid,
});

export const UserReducer = createReducer(initialState, {
  [userAction.SET_TOKEN]: setToken,
  [userAction.SET_USER_LOGGED]: setUserLogged,
});
