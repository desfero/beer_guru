import {combineActions, handleActions} from 'redux-actions';
import {
    compose, lensProp, lensPath, set, view, over, assoc,
    indexBy, prop, merge, concat, defaultTo, __, map, filter,
} from 'ramda';
import {
    getBeerNotFound,
    getBeersSuccess,
    getBeerSuccess,
    getSimilarBeers,
    getSimilarBeersError,
    getSimilarBeersSuccess,
    setActiveBeer
} from './actions';

const beersLens = lensProp('byId');
const beersOrderLens = lensProp('allIds');

const selectedBeerPath = 'selectedBeer';
const selectedBeerIdLens = lensPath([selectedBeerPath, 'id']);
const selectedBeerSimilarBeersIdsLens = lensPath([selectedBeerPath, 'similarBeersIds']);
const selectedBeerSimilarErrorLens = lensPath([selectedBeerPath, 'similarBeersError']);

const defaultState = compose(
    set(beersLens, undefined),
    set(beersOrderLens, undefined),
    set(selectedBeerIdLens, undefined),
    set(selectedBeerSimilarBeersIdsLens, undefined),
    set(selectedBeerSimilarErrorLens, undefined),
)({});

const beersReducer = handleActions({
        [combineActions(getBeersSuccess, getSimilarBeersSuccess)]: (state, {payload}) => {
            const indexedBeers = indexBy(prop('id'), payload.beers);

            return over(beersLens, merge(indexedBeers), state);
        },
        [getBeersSuccess]: (state, {payload}) => {
            const indexedBeersKeys = map(prop('id'), payload.beers);

            return over(beersOrderLens, compose(concat(__, indexedBeersKeys), defaultTo([])), state)
        },
        [getBeerSuccess]: (state, {payload}) => {
            return over(beersLens, assoc(payload.beer.id, payload.beer), state)
        },
        [getBeerNotFound]: (state, {payload}) => {
            return over(beersLens, assoc(payload.beerId, {}), state)
        },
        [setActiveBeer]:
            (state, {payload}) => {
            return set(selectedBeerIdLens, payload.id, state)
        },
        [getSimilarBeers]: state => {
            const defaultValue = view(selectedBeerSimilarBeersIdsLens, defaultState);
            return set(selectedBeerSimilarBeersIdsLens, defaultValue, state)
        },
        [getSimilarBeersSuccess]: (state, {payload}) => {
            const selectedBeerId = view(selectedBeerIdLens, state);
            const beersWithoutSelected = filter(beer => beer.id !== selectedBeerId, payload.beers);
            const indexedBeersKeys = map(prop('id'), beersWithoutSelected);

            return over(selectedBeerSimilarBeersIdsLens, compose(concat(__, indexedBeersKeys), defaultTo([])), state)
        },
        [getSimilarBeersError]: (state, {payload}) => {
            return set(selectedBeerSimilarErrorLens, payload, state)
        },
    },
    defaultState,
);

const beersReducerLens = lensProp('beers');
const beersSelector = view(compose(beersReducerLens, beersLens));
const beersOrderSelector = view(compose(beersReducerLens, beersOrderLens));
const selectedBeerIdSelector = view(compose(beersReducerLens, selectedBeerIdLens));
const similarBeersIdsSelector = view(compose(beersReducerLens, selectedBeerSimilarBeersIdsLens));
const similarBeersErrorSelector = view(compose(beersReducerLens, selectedBeerSimilarErrorLens));

export {
    beersReducer, beersSelector, beersOrderSelector,
    selectedBeerIdSelector, similarBeersIdsSelector,
    similarBeersErrorSelector,
};
