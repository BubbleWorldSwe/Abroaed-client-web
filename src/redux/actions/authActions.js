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

export const STUDENT_UPDATE_PROFILE_REQUEST = "STUDENT_UPDATE_PROFILE_REQUEST";
export const STUDENT_UPDATE_PROFILE_SUCCESS = "STUDENT_UPDATE_PROFILE_SUCCESS";
export const STUDENT_UPDATE_PROFILE_FAILURE = "STUDENT_UPDATE_PROFILE_FAILURE";

export const STUDENT_GET_PROFILE_REQUEST = "STUDENT_GET_PROFILE_REQUEST";
export const STUDENT_GET_PROFILE_SUCCESS = "STUDENT_GET_PROFILE_SUCCESS";
export const STUDENT_GET_PROFILE_FAILURE = "STUDENT_GET_PROFILE_FAILURE";

export const ADMIN_LOGIN_REQUEST = "ADMIN_LOGIN_REQUEST";
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGIN_FAILURE = "ADMIN_LOGIN_FAILURE";

export const ADMIN_UPDATE_PROFILE_REQUEST = "ADMIN_UPDATE_PROFILE_REQUEST";
export const ADMIN_UPDATE_PROFILE_SUCCESS = "ADMIN_UPDATE_PROFILE_SUCCESS";
export const ADMIN_UPDATE_PROFILE_FAILURE = "ADMIN_UPDATE_PROFILE_FAILURE";

export const ADMIN_GET_PROFILE_REQUEST = "ADMIN_GET_PROFILE_REQUEST";
export const ADMIN_GET_PROFILE_SUCCESS = "ADMIN_GET_PROFILE_SUCCESS";
export const ADMIN_GET_PROFILE_FAILURE = "ADMIN_GET_PROFILE_FAILURE";

export const ADMIN_UPDATE_PASSWORD_REQUEST = "ADMIN_UPDATE_PASSWORD_REQUEST";
export const ADMIN_UPDATE_PASSWORD_SUCCESS = "ADMIN_UPDATE_PASSWORD_SUCCESS";
export const ADMIN_UPDATE_PASSWORD_FAILURE = "ADMIN_UPDATE_PASSWORD_FAILURE";

export const SET_STUDENT_TOKEN = "SET_STUDENT_TOKEN";

export const SET_ADMIN_TOKEN = "SET_ADMIN_TOKEN";

export const LOGOUT = "LOGOUT";
export const STUDENT_LOGOUT = "STUDENT_LOGOUT";
export const ADMIN_LOGOUT = "ADMIN_LOGOUT";

// Student Login Actions
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

// Student Signup Actions
export const studentSignUpRequest = (credentials) => ({
  type: STUDENT_SIGNUP_REQUEST,
  payload: credentials,
});

export const studentSignUpSuccess = (message) => ({
  type: STUDENT_SIGNUP_SUCCESS,
  payload: message,
});

export const studentSignUpFailure = (error) => ({
  type: STUDENT_SIGNUP_FAILURE,
  payload: error,
});

// Student Update Password Actions
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

// Student Update Profile Actions
export const studentUpdateProfileRequest = (profileData) => ({
  type: STUDENT_UPDATE_PROFILE_REQUEST,
  payload: profileData,
});

export const studentUpdateProfileSuccess = (user) => ({
  type: STUDENT_UPDATE_PROFILE_SUCCESS,
  payload: user,
});

export const studentUpdateProfileFailure = (error) => ({
  type: STUDENT_UPDATE_PROFILE_FAILURE,
  payload: error,
});

// Action creators
export const studentGetProfileRequest = (id) => ({
  type: STUDENT_GET_PROFILE_REQUEST,
  payload: id,
});

export const studentGetProfileSuccess = (profile) => ({
  type: STUDENT_GET_PROFILE_SUCCESS,
  payload: profile,
});

export const studentGetProfileFailure = (error) => ({
  type: STUDENT_GET_PROFILE_FAILURE,
  payload: error,
});

// Admin Login Actions
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

// Admin Update Profile Actions
export const adminUpdateProfileRequest = (profileData) => ({
  type: ADMIN_UPDATE_PROFILE_REQUEST,
  payload: profileData,
});

export const adminUpdateProfileSuccess = (admin) => ({
  type: ADMIN_UPDATE_PROFILE_SUCCESS,
  payload: admin,
});

export const adminUpdateProfileFailure = (error) => ({
  type: ADMIN_UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const adminGetProfileRequest = (id) => ({
  type: ADMIN_GET_PROFILE_REQUEST,
  payload: id,
});

export const adminGetProfileSuccess = (profile) => ({
  type: ADMIN_GET_PROFILE_SUCCESS,
  payload: profile,
});

export const adminGetProfileFailure = (error) => ({
  type: ADMIN_GET_PROFILE_FAILURE,
  payload: error,
});

export const setStudentToken = (token) => ({
  type: SET_STUDENT_TOKEN,
  payload: token,
});

export const setAdminToken = (token) => ({
  type: SET_ADMIN_TOKEN,
  payload: token,
});

// Admin Update Password Actions
export const adminUpdatePasswordRequest = (passwordData) => ({
  type: ADMIN_UPDATE_PASSWORD_REQUEST,
  payload: passwordData,
});

export const adminUpdatePasswordSuccess = (message) => ({
  type: ADMIN_UPDATE_PASSWORD_SUCCESS,
  payload: message,
});

export const adminUpdatePasswordFailure = (error) => ({
  type: ADMIN_UPDATE_PASSWORD_FAILURE,
  payload: error,
});

// Logout Actions
export const logout = () => ({
  type: LOGOUT,
});

export const studentLogout = () => ({
  type: STUDENT_LOGOUT,
});

export const adminLogout = () => ({
  type: ADMIN_LOGOUT,
});
