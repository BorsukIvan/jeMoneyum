/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Navigation Middleware ------------ */
  /* ------------- Analytics Middleware ------------- */
  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Dev Tool Enhancers ------------- */
  if (__DEV__) {
    middleware.push(createLogger({ collapsed: true }));
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware
  };
};
