import {handleActions} from 'redux-actions';
import {getBeersSuccess} from './actions';

const defaultState = null;

const beersReducer = handleActions(
    {
        [getBeersSuccess]: (state, {payload}) => payload.beers,
    },
    defaultState,
);

export {beersReducer};
