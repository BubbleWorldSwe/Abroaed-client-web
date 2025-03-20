export const STUDENT_LOGIN_REQUEST = "STUDENT_LOGIN_REQUEST";
export const STUDENT_LOGIN_SUCCESS = "STUDENT_LOGIN_SUCCESS";
export const STUDENT_LOGIN_FAILURE = "STUDENT_LOGIN_FAILURE";

export const STUDENT_SIGNUP_REQUEST = "STUDENT_SIGNUP_REQUEST";
export const STUDENT_SIGNUP_SUCCESS = "STUDENT_SIGNUP_SUCCESS";
export const STUDENT_SIGNUP_FAILURE = "STUDENT_SIGNUP_FAILURE";

export const ADMIN_LOGIN_REQUEST = "ADMIN_LOGIN_REQUEST";
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGIN_FAILURE = "ADMIN_LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const studentLoginRequest = (credentials) => ({
  type: STUDENT_LOGIN_REQUEST,
  payload: credentials,
});

export const studentLoginSuccess = (user) => ({
  type: STUDENT_LOGIN_SUCCESS,
  payload: user,
});

export const studentLoginFailure = (error) => ({
  type: STUDENT_LOGIN_FAILURE,
  payload: error,
});

export const adminLoginRequest = (credentials) => ({
  type: ADMIN_LOGIN_REQUEST,
  payload: credentials,
});

export const adminLoginSuccess = (user) => ({
  type: ADMIN_LOGIN_SUCCESS,
  payload: user,
});

export const adminLoginFailure = (error) => ({
  type: ADMIN_LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
