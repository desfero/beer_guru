import {call, put, takeLatest, select} from 'redux-saga/effects';
import {API} from './api';
import {getBeerError, getBeers, getBeersError, getBeersSuccess, getBeerSuccess, setActiveBeer} from './actions';
import {beerSelector} from './selectors';

function* fetchBeers({ payload }) {
    try {
        const beers = yield call(API.fetchBeers, payload.page);
        yield put(getBeersSuccess(beers));
    } catch (e) {
        yield put(getBeersError(e));
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
        yield put(getBeerError(e));
    }
}

function* beersSaga() {
    yield takeLatest(getBeers, fetchBeers);
}

function* beerSaga() {
    yield takeLatest(setActiveBeer, fetchBeerIfNeeded);
}

export {beersSaga, beerSaga};
