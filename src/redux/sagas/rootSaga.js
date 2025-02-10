import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import teamSaga from "./teamSaga";
import { rolesSaga } from "./rolesSaga";
import destinationSaga from "./destinationSaga";
import countriesSaga from "./countrySaga";
import testPrepsSaga from "./testPrepsSaga";
import languagePrepsSaga from "./languagePrepsSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    teamSaga(),
    rolesSaga(),
    destinationSaga(),
    countriesSaga(),
    testPrepsSaga(),
    languagePrepsSaga(),
  ]);
}
