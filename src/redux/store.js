import {reducer} from './reducer.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk));
