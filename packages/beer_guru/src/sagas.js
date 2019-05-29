import Raven from "raven-js";
import { call, takeEvery } from "redux-saga/effects";
import { logCriticalUIError } from "./actions";
import { sagas as sceneSagas } from "./scenes";

function* logError({ payload, meta }) {
  yield call([Raven, "captureException"], payload, { extra: meta });
}

function* criticalUIErrorSaga() {
  yield takeEvery(logCriticalUIError, logError);
}

const sagas = [...sceneSagas, criticalUIErrorSaga()];

export { sagas };
