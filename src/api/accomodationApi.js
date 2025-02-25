import { BASE_URL } from "../constants/baseUrl";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
} from "../utils/apiUtils";

export const getAccommodations = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/accomodation/list?page=${page}&limit=20`
    );
    console.log(data);
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
    console.log(data);
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
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddAccommodation = async (credentials) => {
  try {
    console.log(credentials);

    const data = await makePostRequest(
      `${BASE_URL}/api/v1/admin/accomodation/create`,
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

export const setUpdateAccommodation = async (id, credentials) => {
  try {
    console.log(credentials);

    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/accomodation/${id}`,
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

export const setDeleteAccommodation = async (id) => {
  try {
    console.log(id + " id");

    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/accomodation/${id}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAccommodationDetailsById = async (id) => {
  try {
    console.log(id);
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
