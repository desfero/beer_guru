import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from './services';
import {getBeers, getBeersError, getBeersSuccess, setActiveBeer} from './actions';

function* fetchBeers() {
    try {
        const beers = yield call(API.fetchBeers);
        yield put(getBeersSuccess(beers));
    } catch (e) {
        yield put(getBeersError(e));
    }
}

function* fetchBeer({ payload }) {
    try {

    } catch (e) {

    }
}

function* beersSaga() {
    yield takeLatest(getBeers, fetchBeers);
}

function* beerSaga() {
    yield takeLatest(setActiveBeer, fetchBeer);
}

export {beersSaga, beerSaga};
