import { all } from 'redux-saga/effects';
import { watchSignIn } from './authSaga.js'

export default function* rootSaga() {
  yield all([
    watchSignIn(),
  ]);
}
