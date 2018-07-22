import { createActions, createAction } from 'redux-actions';

const { getBeers, getBeersSuccess, getBeersError } = createActions({
    GET_BEERS: page => ({ page }),
    GET_BEERS_SUCCESS: beers => ({ beers }),
    GET_BEERS_ERROR: error => ({ error }),
});

const { getBeerSuccess, getBeerError } = createActions({
    GET_BEER_SUCCESS: beer => ({ beer }),
    GET_BEER_ERROR: error => ({ error }),
});

const setActiveBeer = createAction('SET_ACTIVE_BEER', id => ({ id }));

export {
    getBeers,
    getBeersError,
    getBeersSuccess,
    getBeerSuccess,
    getBeerError,
    setActiveBeer,
}
