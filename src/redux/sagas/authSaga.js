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
  adminUpdateProfileSuccess,
  adminUpdateProfileFailure,
  studentUpdateProfileSuccess,
  studentUpdateProfileFailure,
  adminGetProfileSuccess,
  adminGetProfileFailure,
  studentGetProfileSuccess,
  studentGetProfileFailure,
  STUDENT_GET_PROFILE_REQUEST,
  ADMIN_GET_PROFILE_REQUEST,
} from "../actions/authActions";

import {
  getUserProfile,
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
        const extractedPath =
          resetPasswordLink.match(/\/update-password\/[^?]+/)?.[0] || "";

        window.location.href = extractedPath;
        yield put(studentSignUpSuccess({ user: response.data.user }));
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

      yield delay(2000);
      window.location.replace("/signin");
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

function* handleGetStudentProfile(action) {
  try {
    const response = yield call(getUserProfile, action.payload);
    if (response.status === 200) {
      yield put(studentGetProfileSuccess(response.data));
    } else {
      yield put(studentGetProfileFailure(response.message));
      // toast.error("Failed to fetch student profile");
    }
  } catch (error) {
    yield put(
      studentGetProfileFailure(
        error.response?.data?.message || "Error fetching student profile"
      )
    );
  }
}

function* handleGetAdminProfile(action) {
  try {
    const response = yield call(getUserProfile, action.payload);
    if (response.status === 200) {
      yield put(adminGetProfileSuccess(response.data));
    } else {
      yield put(adminGetProfileFailure(response.message));
      // toast.error("Failed to fetch admin profile");
    }
  } catch (error) {
    yield put(
      adminGetProfileFailure(
        error.response?.data?.message || "Error fetching admin profile"
      )
    );
  }
}

function* handleStudentProfileUpdate(action) {
  try {
    const response = yield call(getUserProfile, action.payload);
    if (response?.status === 200) {
      yield put(studentUpdateProfileSuccess(response?.data));
      toast.success("Student Profile Updated Successfully!");
    } else {
      yield put(studentUpdateProfileFailure(response?.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(studentUpdateProfileFailure(error.response?.data?.message));
    toast.error(
      error.response?.data?.message || "Student Profile Update Failed"
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

function* handleAdminProfileUpdate(action) {
  try {
    const response = yield call(getUserProfile, action.payload);
    if (response?.status === 200) {
      yield put(adminUpdateProfileSuccess(response?.data));
      toast.success("Admin Profile Updated Successfully!");
    } else {
      yield put(adminUpdateProfileFailure(response?.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(adminUpdateProfileFailure(error.response?.data?.message));
    toast.error(error.response?.data?.message || "Admin Profile Update Failed");
  }
}

export default function* authSaga() {
  yield takeLatest(STUDENT_LOGIN_REQUEST, handleStudentLogin);
  yield takeLatest(STUDENT_SIGNUP_REQUEST, handleStudentSignUp);
  yield takeLatest(ADMIN_LOGIN_REQUEST, handleAdminLogin);
  yield takeLatest(STUDENT_UPDATE_PASSWORD_REQUEST, handleStudentResetPassword);
  yield takeLatest(STUDENT_GET_PROFILE_REQUEST, handleGetStudentProfile);
  yield takeLatest(ADMIN_GET_PROFILE_REQUEST, handleGetAdminProfile);
}
