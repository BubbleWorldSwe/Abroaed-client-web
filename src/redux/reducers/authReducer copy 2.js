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
  STUDENT_LOGOUT,
  ADMIN_LOGOUT,
} from "../actions/authActions";

import storage from "redux-persist/lib/storage";

const initialState = {
  loading: false,
  token: null,
  user: null,

  role: null,
  error: null,
  admin: null,
  student: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
    case STUDENT_SIGNUP_REQUEST:
    case STUDENT_UPDATE_PASSWORD_REQUEST:
    case ADMIN_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case STUDENT_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        student: action.payload.user,
        token: action.payload.token,
        role: "Student",
      };

    case STUDENT_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,

        message: action.payload,
      };

    case STUDENT_UPDATE_PASSWORD_SUCCESS:
      return { ...state, loading: false, message: action.payload };

    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        admin: action.payload.user,
        token: action.payload.token,
        role: action.payload?.user?.roleId?.roleName,
      };

    case STUDENT_LOGIN_FAILURE:
    case STUDENT_SIGNUP_FAILURE:
    case STUDENT_UPDATE_PASSWORD_FAILURE:
    case ADMIN_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      storage.removeItem("persist:auth");
      return initialState;

    case STUDENT_LOGOUT:
      return { ...state, student: null };

    case ADMIN_LOGOUT:
      return { ...state, admin: null };

    default:
      return state;
  }
};
