import {
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  LOGOUT,
} from "../actions/authActions";

import storage from "redux-persist/lib/storage";

const initialState = {
  loading: false,
  token: null,
  user: null,
  role: null, // 'student' or 'admin'
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
    case ADMIN_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case STUDENT_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        role: "student",
      };

    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        role: "admin",
      };

    case STUDENT_LOGIN_FAILURE:
    case ADMIN_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      storage.removeItem("persist:auth");
      return initialState;

    default:
      return state;
  }
};
