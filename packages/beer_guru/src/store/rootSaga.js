import { all } from "redux-saga/effects";
import { sagas } from "../sagas";

function* rootSaga() {
  yield all(sagas);
}

export { rootSaga };
