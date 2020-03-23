import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default (appreducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  middleware.push(logger);

  middleware.push(logger);
  enhancers.push(applyMiddleware(...middleware));

  const PersistReducer = persistReducer(persistConfig, appreducer);
  const store = createStore(PersistReducer, compose(...enhancers));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};
