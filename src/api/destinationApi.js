import { BASE_URL } from "../constants/baseUrl";
import {
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
} from "../utils/apiUtils";

export const getDestinations = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination?page=${page}`
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
