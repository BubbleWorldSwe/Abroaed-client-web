import { BASE_URL } from "../constants/baseUrl";
import { store } from "../redux/store";
import {
  makeGetRequest,
  makePostRequest,
  makePutRequestWithToken,
} from "../utils/apiUtils";

export const loginApi = async (credentials) => {
  try {
    const data = await makePostRequest(
      `${BASE_URL}/api/v1/auth/login`,
      credentials
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setStudentSignUp = async (credentials) => {
  try {
    const data = await makePostRequest(
      `${BASE_URL}/api/v1/auth/student/signup`,
      credentials
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setVerifyOtp = async (credentials) => {
  try {
    const data = await makePostRequest(
      `${BASE_URL}/api/v1/auth/student/verify-otp`,
      credentials
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setResendOtp = async (credentials) => {
  try {
    const data = await makePostRequest(
      `${BASE_URL}/api/v1/auth/student/resend-otp`,
      credentials
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateStudent = async (credentials) => {
  try {
    const { studentToken } = store.getState().auth;

    const data = await makePutRequestWithToken(
      `${BASE_URL}/api/v1/auth/update-user`,
      credentials,
      studentToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateStudentPassword = async (credentials) => {
  try {
    const { studentToken } = store.getState().auth;

    const data = await makePutRequestWithToken(
      `${BASE_URL}/api/v1/auth/set-password`,
      credentials,
      studentToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateAdmin = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;

    const data = await makePutRequestWithToken(
      `${BASE_URL}/api/v1/auth/update-user`,
      credentials,
      adminToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateAdminPassword = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;

    const data = await makePutRequestWithToken(
      `${BASE_URL}/api/v1/auth/set-password`,
      credentials,
      adminToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async (id) => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/auth/get-user/${id}`);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};
