import { BASE_URL } from "../constants/baseUrl";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
} from "../utils/apiUtils";

export const getDestinations = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/list?page=${page}&limit=20`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddDestination = async (credentials) => {
  try {
    console.log(credentials);

    const data = await makePostRequest(
      `${BASE_URL}/api/v1/admin/destination/create`,
      credentials
    );
    // console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateDestination = async (id, credentials) => {
  try {
    console.log(credentials);

    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/destination/${id}`,
      credentials
    );
    // console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDeleteDestination = async (id) => {
  try {
    console.log(id + " id");

    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/destination/${id}`
    );
    //  console.log(data);
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDestinationDetailsById = async (id) => {
  try {
    console.log(id);
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
