import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import teamSaga from "./teamSaga";
import destinationSaga from "./destinationSaga";
import countriesSaga from "./countrySaga";
import testPrepsSaga from "./testPrepsSaga";
import languagePrepsSaga from "./languagePrepsSaga";
import collegesSaga from "./collegeSaga";
import accommodationsSaga from "./accommodationSaga";
import leadsSaga from "./leadsSaga";
import studentsSaga from "./studentsSaga";
import blogsSaga from "./blogSaga";
import transactionSaga from "./transactionSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    teamSaga(),
    destinationSaga(),
    countriesSaga(),
    testPrepsSaga(),
    languagePrepsSaga(),
    collegesSaga(),
    accommodationsSaga(),
    leadsSaga(),
    studentsSaga(),
    blogsSaga(),
    transactionSaga(),
  ]);
}
