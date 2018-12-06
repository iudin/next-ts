import { createStore, applyMiddleware, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './store/index';

import { IState } from './store/i';

import logger from 'Lib/log';

export const middlewares = [thunk];

const isDev = process.env.NODE_ENV === `development`;
const enhancer = isDev
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

export const initStore = (initialState = {}) =>
  createStore<IState, AnyAction, {}, {}>(reducer, initialState, enhancer);
