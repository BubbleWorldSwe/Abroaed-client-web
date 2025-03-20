import { call, put, takeLatest } from "redux-saga/effects";
import {
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  studentLoginSuccess,
  studentLoginFailure,
  adminLoginSuccess,
  adminLoginFailure,
} from "../actions/authActions";

import { loginApi } from "../../api/authApi";
import { toast } from "react-toastify";

function* handleStudentLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);

    if (response.status === 201) {
      yield put(studentLoginSuccess(response.data));
    } else {
      yield put(studentLoginFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(
      studentLoginFailure(
        error.response?.data?.message || "Student login failed"
      )
    );
  }
}

function* handleAdminLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);

    if (response.status === 201) {
      yield put(adminLoginSuccess(response.data));
    } else {
      yield put(adminLoginFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(
      adminLoginFailure(error.response?.data?.message || "Admin login failed")
    );
  }
}

export default function* authSaga() {
  yield takeLatest(STUDENT_LOGIN_REQUEST, handleStudentLogin);
  yield takeLatest(ADMIN_LOGIN_REQUEST, handleAdminLogin);
}
