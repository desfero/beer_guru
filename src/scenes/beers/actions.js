import { createActions } from 'redux-actions';

const { getBeers, getBeersSuccess, getBeersError } = createActions({
    GET_BEERS_SUCCESS: beers => ({ beers }),
    GET_BEERS_ERROR: error => ({ error }),
}, 'GET_BEERS');

export {
    getBeers,
    getBeersError,
    getBeersSuccess,
}
