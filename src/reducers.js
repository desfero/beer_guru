import {handleActions} from 'redux-actions';
import {
    compose, lensProp, set, view
} from 'ramda';
import {logCriticalUIError} from './actions';
import {reducers as sceneReducers} from './scenes';

const defaultState = {
    criticalUIError: null
};

const layoutReducerLens = lensProp('layout');
const criticalUIErrorLens = lensProp('criticalUIError');


const layoutReducer = handleActions({
        [logCriticalUIError]: (state, {payload, meta}) =>
            set(criticalUIErrorLens, {error: payload, extra: meta}, state),
    },
    defaultState,
);

const criticalUIErrorSelector = view(compose(layoutReducerLens, criticalUIErrorLens));

const reducers = {
    ...sceneReducers,
    layout: layoutReducer,
};

export {criticalUIErrorSelector, reducers};
