import { BASE_URL } from "../constants/baseUrl";
import {
  makeGetRequest,
  makePostRequest,
  makePostRequestWithToken,
  makePutRequestWithToken,
} from "../utils/apiUtils";

export const loginApi = async (credentials) => {
  try {
    const data = await makePostRequest(
      `${BASE_URL}/api/v1/auth/login`,
      credentials
    );
    //console.log(data);
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
    //console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateStudent = async (credentials) => {
  try {
    const data = await makePutRequestWithToken(
      `${BASE_URL}/api/v1/auth/update-user`,
      credentials
    );
    //console.log(data);
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
