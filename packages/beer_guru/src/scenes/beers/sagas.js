import {call, put, takeLatest, select, takeEvery} from 'redux-saga/effects';
import {API} from './api';
import {
    getBeerNotFound,
    getBeers,
    getBeersSuccess,
    getBeerSuccess,
    getSimilarBeers,
    getSimilarBeersError,
    getSimilarBeersSuccess,
    setActiveBeer
} from './actions';
import {beerSelector} from './selectors';
import {logCriticalUIError} from '../../actions';
import {applyThreshold} from '../../helpers';

function* fetchBeers({payload}) {
    try {
        const beers = yield call(API.fetchBeers, {page: payload.page});
        yield put(getBeersSuccess(beers));
    } catch (e) {
        yield put(logCriticalUIError(e));
    }
}

function* fetchSimilarBeers({payload}) {
    try {
        const params = {
            // Fetch one more than needed as response will also contain selected beer
            per_page: 4,
            abv_gt: Math.round(applyThreshold(payload.abv, -1)),
            abv_lt: Math.round(applyThreshold(payload.abv, +1)),
            ibu_gt: Math.round(applyThreshold(payload.ibu, -1)),
            ibu_lt: Math.round(applyThreshold(payload.ibu, +1)),
            ebc_gt: Math.round(applyThreshold(payload.ebc, -1)),
            ebc_lt: Math.round(applyThreshold(payload.ebc, +1)),
        };

        const beers = yield call(API.fetchBeers, params);

        yield put(getSimilarBeersSuccess(beers));
    } catch (e) {
        yield put(getSimilarBeersError(e));
    }
}

function* fetchBeerIfNeeded({payload}) {
    try {
        const beer = yield select(beerSelector);

        if (!beer) {
            const fetchedBeer = yield call(API.fetchBeer, payload.id);
            yield put(getBeerSuccess(fetchedBeer));

        }
    } catch (e) {
        if (e.statusCode === 404) {
            yield put(getBeerNotFound(payload.id));
        } else {
            yield put(logCriticalUIError(e));
        }
    }
}

function* beersSaga() {
    yield takeEvery(getBeers, fetchBeers);
    yield takeLatest(setActiveBeer, fetchBeerIfNeeded);
    yield takeLatest(getSimilarBeers, fetchSimilarBeers);
}

export {beersSaga};
