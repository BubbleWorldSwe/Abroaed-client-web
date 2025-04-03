import {
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  LOGOUT,
  STUDENT_SIGNUP_SUCCESS,
  STUDENT_SIGNUP_FAILURE,
  STUDENT_UPDATE_PASSWORD_REQUEST,
  STUDENT_UPDATE_PASSWORD_FAILURE,
  STUDENT_UPDATE_PASSWORD_SUCCESS,
  STUDENT_SIGNUP_REQUEST,
  ADMIN_LOGOUT,
  STUDENT_LOGOUT,
  STUDENT_UPDATE_PROFILE_REQUEST,
  STUDENT_UPDATE_PROFILE_SUCCESS,
  STUDENT_UPDATE_PROFILE_FAILURE,
  ADMIN_UPDATE_PROFILE_REQUEST,
  ADMIN_UPDATE_PROFILE_SUCCESS,
  ADMIN_UPDATE_PROFILE_FAILURE,
  STUDENT_GET_PROFILE_REQUEST,
  STUDENT_GET_PROFILE_SUCCESS,
  STUDENT_GET_PROFILE_FAILURE,
  ADMIN_GET_PROFILE_REQUEST,
  ADMIN_GET_PROFILE_SUCCESS,
  ADMIN_GET_PROFILE_FAILURE,
} from "../actions/authActions";

import storage from "redux-persist/lib/storage";

const initialState = {
  loading: false,
  token: null,

  role: null,
  error: null,

  adminToken: null,
  admin: null,
  student: null,
  studentToken: null,
  isWriteAccess: null,
  isLoggedInAdmin: null,
  isLoggedInStudent: null,

  adminId: null,
  studentId: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
    case STUDENT_SIGNUP_REQUEST:
    case STUDENT_UPDATE_PASSWORD_REQUEST:
    case STUDENT_UPDATE_PROFILE_REQUEST:
    case ADMIN_LOGIN_REQUEST:
    case ADMIN_UPDATE_PROFILE_REQUEST:
    case STUDENT_GET_PROFILE_REQUEST:
    case ADMIN_GET_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };

    case STUDENT_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        studentToken: action.payload.token,
        student: action.payload.user,
        isLoggedInStudent: true,
        studentId: action.payload.user._id,
      };

    case STUDENT_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case STUDENT_UPDATE_PASSWORD_SUCCESS:
      return { ...state, loading: false, message: action.payload };

    case STUDENT_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
      };

    case STUDENT_GET_PROFILE_SUCCESS:
      return { ...state, loading: false, studentProfile: action.payload };

    case ADMIN_GET_PROFILE_SUCCESS:
      return { ...state, loading: false, adminProfile: action.payload };

    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        adminToken: action.payload.token,
        role: action.payload?.user?.roleId?.roleName,
        admin: action.payload.user,
        isWriteAccess: action.payload?.user?.isWriteAccess,
        isLoggedInAdmin: true,
        adminId: action.payload.user._id,
      };

    case ADMIN_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        admin: action.payload,
      };

    case STUDENT_LOGIN_FAILURE:
    case STUDENT_SIGNUP_FAILURE:
    case STUDENT_UPDATE_PASSWORD_FAILURE:
    case STUDENT_UPDATE_PROFILE_FAILURE:
    case ADMIN_LOGIN_FAILURE:
    case ADMIN_UPDATE_PROFILE_FAILURE:
    case STUDENT_GET_PROFILE_FAILURE:
    case ADMIN_GET_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      storage.removeItem("persist:auth");
      return initialState;

    case STUDENT_LOGOUT:
      return {
        ...state,
        student: null,
        studentToken: null,
        isLoggedInStudent: false,
        studentId: null,
      };

    case ADMIN_LOGOUT:
      return {
        ...state,
        admin: null,
        adminToken: null,
        role: null,
        isWriteAccess: null,
        isLoggedInAdmin: false,
        adminId: null,
      };

    default:
      return state;
  }
};
