import {handleActions} from 'redux-actions';
import {compose, lensProp, set, view} from 'ramda';
import {getBeersSuccess, setActiveBeer} from './actions';

const defaultState = {
    beers: undefined,
    selectedBeerId: undefined,
};

const beersReducerLens = lensProp('beers');
const beersLens = lensProp('beers');
const selectedBeerIdLens = lensProp('selectedBeerId');

const beersReducer = handleActions(
    {
        [getBeersSuccess]: (state, {payload}) => set(beersLens, payload.beers, state),
        [setActiveBeer]: (state, {payload}) => set(selectedBeerIdLens, payload.id, state),
    },
    defaultState,
);

const beersSelector = view(compose(beersReducerLens, beersLens));
const selectedBeerIdSelector = view(compose(beersReducerLens, selectedBeerIdLens));

export {beersReducer, beersSelector, selectedBeerIdSelector};
