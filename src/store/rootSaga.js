import {all} from 'redux-saga/effects';
import {sagas} from '../scenes';

function* rootSaga() {
    yield all(sagas);
}

export {rootSaga};
