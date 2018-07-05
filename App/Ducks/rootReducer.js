import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from './rootSaga';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({

});

export default () => {
  const { store } = configureStore(reducers, rootSaga);

  return store;
};
