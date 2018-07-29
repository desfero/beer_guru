import {createActions, createAction} from 'redux-actions';

const {getBeers, getBeersSuccess} = createActions({
    GET_BEERS: page => ({page}),
    GET_BEERS_SUCCESS: beers => ({beers}),
});

const {getBeerSuccess, getBeerNotFound} = createActions({
    GET_BEER_SUCCESS: beer => ({beer}),
    GET_BEER_NOT_FOUND: beerId => ({beerId}),
});

const {getSimilarBeers, getSimilarBeersSuccess, getSimilarBeersError} = createActions({
    GET_SIMILAR_BEERS_SUCCESS: beers => ({beers})
}, 'GET_SIMILAR_BEERS', 'GET_SIMILAR_BEERS_ERROR');

const setActiveBeer = createAction('SET_ACTIVE_BEER', id => ({id}));

export {
    getBeers,
    getBeersSuccess,
    getBeerSuccess,
    getBeerNotFound,
    setActiveBeer,
    getSimilarBeers,
    getSimilarBeersSuccess,
    getSimilarBeersError,
};
