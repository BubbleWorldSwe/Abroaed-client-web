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

export const getTestPreps = async (page) => {
  console.log(page + " getTestPreps");
  try {
    const path = page ? `?page=${page}&limit=${pageDataLimit}` : "";

    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/test-preps/list${path}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddTestPrep = async (credentials) => {
  try {
    console.log(credentials);
    const { adminToken } = store.getState().auth;

    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/test-preps/create`,
      credentials,
      adminToken
    );
    // console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateTestPrep = async (id, credentials) => {
  try {
    console.log(credentials);

    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/test-preps/${id}`,
      credentials
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDeleteTestPrep = async (id) => {
  try {
    console.log(id + " id");

    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/test-preps/${id}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTestPrepDetailsById = async (id) => {
  try {
    console.log(id);
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/test-preps/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setTestPrepUploadFile = async (id, imageData) => {
  try {
    const { files, type } = imageData;
    const { adminToken } = store.getState().auth;
    const data = await makePutRequestWithFormData(
      `${BASE_URL}/api/v1/admin/test-preps/upload/file/${id}`,
      {
        files,
        type,
      },
      adminToken
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
