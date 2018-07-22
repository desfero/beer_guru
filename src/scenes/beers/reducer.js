import {handleActions} from 'redux-actions';
import {
    compose, lensProp, set, view, over,
    indexBy, prop, merge, concat, defaultTo,  __
} from 'ramda';
import {getBeersSuccess, setActiveBeer} from './actions';

const defaultState = {
    byId: undefined,
    allIds: undefined,
    selectedBeerId: undefined,
};

const beersReducerLens = lensProp('beers');
const beersLens = lensProp('byId');
const beersOrderLens = lensProp('allIds');

const selectedBeerIdLens = lensProp('selectedBeerId');

const beersReducer = handleActions({
        [getBeersSuccess]: (state, {payload}) => {
            const indexedBeers = indexBy(prop('id'), payload.beers);
            const indexedBeersKeys = Object.keys(indexedBeers);

            return compose(
                over(beersLens, merge(indexedBeers)),
                over(beersOrderLens, compose(concat(__, indexedBeersKeys), defaultTo([])))
            )(state)
        },
        [setActiveBeer]: (state, {payload}) => set(selectedBeerIdLens, payload.id, state),
    },
    defaultState,
);

const beersSelector = view(compose(beersReducerLens, beersLens));
const beersOrderSelector = view(compose(beersReducerLens, beersOrderLens));
const selectedBeerIdSelector = view(compose(beersReducerLens, selectedBeerIdLens));

export {beersReducer, beersSelector, beersOrderSelector, selectedBeerIdSelector};
