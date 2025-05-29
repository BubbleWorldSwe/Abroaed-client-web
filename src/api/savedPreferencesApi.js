import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePostRequestWithToken,
} from "../utils/apiUtils";

export const getSavedPreferences = async (studentId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/save-preference/list?filter={"user":"${studentId}"}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddSavedPreference = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/save-preference/create`,
      credentials,
      adminToken
    );
    //
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateSavedPreference = async (id, credentials) => {
  try {
    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/save-preference/${id}`,
      credentials
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDeleteSavedPreference = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/save-preference/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
