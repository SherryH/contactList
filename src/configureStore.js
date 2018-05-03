import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadingBarReducer, loadingBarMiddleware } from 'react-redux-loading-bar';
import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(loadingBarMiddleware(), thunk));

const appReducer = combineReducers({ reducer, loadingBar: loadingBarReducer });

const configureStore = () => createStore(appReducer, enhancer);
export default configureStore;
