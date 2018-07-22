import { createActions, createAction } from 'redux-actions';

const { getBeers, getBeersSuccess, getBeersError } = createActions({
    GET_BEERS_SUCCESS: beers => ({ beers }),
    GET_BEERS_ERROR: error => ({ error }),
}, 'GET_BEERS');

const { getBeer, getBeerSuccess, getBeerError } = createActions({
    GET_BEER_SUCCESS: beer => ({ beer }),
    GET_BEER_ERROR: error => ({ error }),
}, 'GET_BEER');

const setActiveBeer = createAction('SET_ACTIVE_BEER', id => ({ id }));

export {
    getBeers,
    getBeersError,
    getBeersSuccess,
    getBeer,
    getBeerSuccess,
    getBeerError,
    setActiveBeer,
}
