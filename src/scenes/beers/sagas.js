import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from './services';
import {getBeers, getBeersError, getBeersSuccess} from './actions';

function* fetchBeers() {
    try {
        const beers = yield call(API.fetchBeers);
        yield put(getBeersSuccess(beers));
    } catch (e) {
        yield put(getBeersError(e));
    }
}

function* beersSaga() {
    yield takeLatest(getBeers, fetchBeers);
}

export {beersSaga};
