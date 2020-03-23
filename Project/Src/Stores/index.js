import {combineReducers} from 'redux';
import {UserReducer} from 'Src/Stores/Reducer';
import ConfigureStore from './Store';
import rootSaga from 'Src/Saga';
import {useReducer} from 'react';

export default () => {
  const appreducer = combineReducers({
    user: UserReducer,
  });

  const rootreducer = (state, action) => {
    if (action.type === 'logout') {
      state = undefined;
    }
    return appreducer(state, action);
  };
  return ConfigureStore(rootreducer, rootSaga);
};
