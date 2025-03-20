import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
} from "../actions/authActions";

import { loginApi } from "../../api/authApi";
import { toast } from "react-toastify";

function* handleLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);

    if (response.status === 201) {
      console.log("Success");
      yield put(loginSuccess(response.data));
    } else {
      yield put(loginFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || "Login failed"));
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
