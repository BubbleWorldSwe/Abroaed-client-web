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

export const getDestinations = async (page) => {
  try {
    const path = page ? `?page=${page}&limit=${pageDataLimit}` : "";

    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/list${path}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllDestinations = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/list`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddDestination = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/destination/create`,
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

export const setUpdateDestination = async (id, credentials) => {
  try {
    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/destination/${id}`,
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

export const setDeleteDestination = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/destination/${id}`
    );
    //
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDestinationDetailsById = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setDestinationUploadFile = async (id, imageData) => {
  try {
    const { files, type } = imageData;
    const { adminToken } = store.getState().auth;
    const data = await makePutRequestWithFormData(
      `${BASE_URL}/api/v1/admin/destination/upload/file/${id}`,
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
