/* @flow */
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {reducer as form} from 'redux-form/immutable';

const rootReducer = combineReducers({form});
const middleware = [];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(...middleware)),
);
