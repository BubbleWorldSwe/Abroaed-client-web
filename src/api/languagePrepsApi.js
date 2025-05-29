import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePostRequestWithToken,
  makePutRequestWithFormData,
} from "../utils/apiUtils";

export const getLanguagePreps = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/language-preps/list?page=${page}&limit=${pageDataLimit}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllLanguagePreps = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/language-preps/list`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddLanguagePrep = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;

    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/language-preps/create`,
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

export const setUpdateLanguagePrep = async (id, credentials) => {
  try {
    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/language-preps/${id}`,
      credentials
    );
    //
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDeleteLanguagePrep = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/language-preps/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLanguagePrepDetailsById = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/language-preps/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setLanguagePrepUploadFile = async (id, imageData) => {
  try {
    const { files, type } = imageData;

    const { adminToken } = store.getState().auth;

    const data = await makePutRequestWithFormData(
      `${BASE_URL}/api/v1/admin/language-preps/upload/file/${id}`,
      {
        files,
        type,
      },
      adminToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
