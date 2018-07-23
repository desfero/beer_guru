import {call, put, takeLatest, select, takeEvery} from 'redux-saga/effects';
import {API} from './api';
import {getBeerNotFound, getBeers, getBeersSuccess, getBeerSuccess, setActiveBeer} from './actions';
import {beerSelector} from './selectors';
import {logCriticalUIError} from '../../actions';

function* fetchBeers({ payload }) {
    try {
        const beers = yield call(API.fetchBeers, payload.page);
        yield put(getBeersSuccess(beers));
    } catch (e) {
        yield put(logCriticalUIError(e));
    }
}

function* fetchBeerIfNeeded({ payload }) {
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
}

export {beersSaga};
