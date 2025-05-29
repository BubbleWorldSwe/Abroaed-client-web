/* eslint-disable no-useless-catch */
import { useSelector } from "react-redux";
import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePostRequestWithToken,
  makePutRequestWithFormData,
} from "../utils/apiUtils";
import { store } from "../redux/store";

export const getAccommodations = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/accomodation/list?page=${page}&limit=${pageDataLimit}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllAccommodations = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/accomodation/list`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAccommodationsByDestinationId = async (destId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/accomodation/list?filter={"destinationId":"${destId}"}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAccommodationsByStateId = async (stateId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/accomodation/list?filter={"stateId":"${stateId}"}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddAccommodation = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;

    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/accomodation/create`,
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

export const setUpdateAccommodation = async (id, credentials) => {
  try {
    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/accomodation/${id}`,
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

export const setDeleteAccommodation = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/accomodation/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAccommodationDetailsById = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/accomodation/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAccommodationUploadFile = async (id, imageData) => {
  try {
    const { files, type } = imageData;
    const { adminToken } = store.getState().auth;
    const data = await makePutRequestWithFormData(
      `${BASE_URL}/api/v1/admin/accomodation/upload/file/${id}`,
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
