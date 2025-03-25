import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  STUDENT_LOGIN_REQUEST,
  ADMIN_LOGIN_REQUEST,
  studentLoginSuccess,
  studentLoginFailure,
  adminLoginSuccess,
  adminLoginFailure,
  studentSignUpSuccess,
  studentSignUpFailure,
  STUDENT_SIGNUP_REQUEST,
  studentUpdatePasswordSuccess,
  studentUpdatePasswordFailure,
  STUDENT_UPDATE_PASSWORD_REQUEST,
} from "../actions/authActions";

import {
  loginApi,
  setStudentSignUp,
  setUpdateStudent,
} from "../../api/authApi";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/baseUrl";

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

function* handleStudentSignUp(action) {
  try {
    const response = yield call(setStudentSignUp, action.payload);

    console.log(response);
    if (response.status === 201) {
      const resetPasswordLink = response.data?.resetPasswordLink || "";
      if (resetPasswordLink) {
        // Replace "undefined" with the actual frontend URL
        const formattedLink = resetPasswordLink.replace(
          "undefined",
          //    "http://localhost:5173"
          BASE_URL
        );

        // Extracting the token from the URL
        const token = formattedLink.split("token=")[1];
        localStorage.setItem("token", token);

        // Navigate to the update-password page
        window.location.href = formattedLink;

        yield put(studentSignUpSuccess({ user: response.data.user, token }));
      }
    } else {
      yield put(studentSignUpFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(
      studentSignUpFailure(
        error.response?.data?.message || "Student Sign Up failed"
      )
    );
  }
}

function* handleStudentResetPassword(action) {
  try {
    const response = yield call(setUpdateStudent, action.payload);

    console.log(response);
    if (response.status === 200) {
      yield put(studentUpdatePasswordSuccess(response.data));
      toast.success("Password Set Successfully, Please Login to Continue");

      yield delay(2000); // Using Redux-Saga's delay

      window.location.replace("/signin");

      // yield put(push("/signin"));

      //   window.location.href = "/signin";
    } else {
      yield put(studentUpdatePasswordFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(
      studentUpdatePasswordFailure(
        error.response?.data?.message || "Student Update Password failed"
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
  yield takeLatest(STUDENT_SIGNUP_REQUEST, handleStudentSignUp);
  yield takeLatest(ADMIN_LOGIN_REQUEST, handleAdminLogin);
  yield takeLatest(STUDENT_UPDATE_PASSWORD_REQUEST, handleStudentResetPassword);
}
