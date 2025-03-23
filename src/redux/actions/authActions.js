export const STUDENT_LOGIN_REQUEST = "STUDENT_LOGIN_REQUEST";
export const STUDENT_LOGIN_SUCCESS = "STUDENT_LOGIN_SUCCESS";
export const STUDENT_LOGIN_FAILURE = "STUDENT_LOGIN_FAILURE";

export const STUDENT_SIGNUP_REQUEST = "STUDENT_SIGNUP_REQUEST";
export const STUDENT_SIGNUP_SUCCESS = "STUDENT_SIGNUP_SUCCESS";
export const STUDENT_SIGNUP_FAILURE = "STUDENT_SIGNUP_FAILURE";

export const STUDENT_UPDATE_PASSWORD_REQUEST =
  "STUDENT_UPDATE_PASSWORD_REQUEST";
export const STUDENT_UPDATE_PASSWORD_SUCCESS =
  "STUDENT_UPDATE_PASSWORD_SUCCESS";
export const STUDENT_UPDATE_PASSWORD_FAILURE =
  "STUDENT_UPDATE_PASSWORD_FAILURE";

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

export const studentSignUpRequest = (credentials) => ({
  type: STUDENT_SIGNUP_REQUEST,
  payload: credentials,
});

export const studentSignUpSuccess = (user) => ({
  type: STUDENT_SIGNUP_SUCCESS,
  payload: user,
});

export const studentSignUpFailure = (error) => ({
  type: STUDENT_SIGNUP_FAILURE,
  payload: error,
});

export const studentUpdatePasswordRequest = (passwordData) => ({
  type: STUDENT_UPDATE_PASSWORD_REQUEST,
  payload: passwordData,
});

export const studentUpdatePasswordSuccess = (message) => ({
  type: STUDENT_UPDATE_PASSWORD_SUCCESS,
  payload: message,
});

export const studentUpdatePasswordFailure = (error) => ({
  type: STUDENT_UPDATE_PASSWORD_FAILURE,
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
