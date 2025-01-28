import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import teamSaga from "./teamSaga";
import { rolesSaga } from "./rolesSaga";

export default function* rootSaga() {
  yield all([authSaga(), teamSaga(), rolesSaga()]);
}
