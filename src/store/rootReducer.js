import {combineReducers} from 'redux';
import {reducers} from '../scenes';

const rootReducer = combineReducers(reducers);

export {rootReducer};
