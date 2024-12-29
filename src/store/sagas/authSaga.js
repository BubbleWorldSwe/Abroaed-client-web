import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from '../apis/auth';
import { signInSuccess, signInFailure, signInRequest } from '../reducers/authSlice';
import { setRedirectTo } from '../reducers/commonSlice';


function* handleSignIn(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(login, email, password);
    yield put(signInSuccess(response));
    yield put(setRedirectTo('/admin/dashboard'));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* watchSignIn() {
  yield takeEvery(signInRequest.type, handleSignIn);
}
