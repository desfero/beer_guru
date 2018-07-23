import { createActions, createAction } from 'redux-actions';

const { getBeers, getBeersSuccess } = createActions({
    GET_BEERS: page => ({ page }),
    GET_BEERS_SUCCESS: beers => ({ beers }),
});

const { getBeerSuccess, getBeerNotFound } = createActions({
    GET_BEER_SUCCESS: beer => ({ beer }),
    GET_BEER_NOT_FOUND: beerId => ({ beerId }),
});

const setActiveBeer = createAction('SET_ACTIVE_BEER', id => ({ id }));

export {
    getBeers,
    getBeersSuccess,
    getBeerSuccess,
    getBeerNotFound,
    setActiveBeer,
}
