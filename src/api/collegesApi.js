import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequestWithToken,
} from "../utils/apiUtils";

export const getColleges = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/colleges/list?page=${page}&limit=${pageDataLimit}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllColleges = async (page) => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/colleges/list`);
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getCollegesByDestinationId = async (destId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/colleges/list?filter={"destinationId":"${destId}"}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddCollege = async (credentials) => {
  try {
    console.log(credentials);
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/colleges/create`,
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

export const setUpdateCollege = async (id, credentials) => {
  try {
    console.log(credentials);

    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/colleges/${id}`,
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

export const setDeleteCollege = async (id) => {
  try {
    console.log(id + " id");

    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/colleges/${id}`
    );
    // console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCollegeDetailsById = async (id) => {
  try {
    console.log(id);
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/colleges/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getCoursesListByDestinationId = async (id) => {
  try {
    console.log(id);
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/colleges/courses/by-destination/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setCollegeUploadFile = async (id, imageData) => {
  try {
    const { files, type } = imageData;

    const formData = new FormData();

    if (Array.isArray(files)) {
      files.forEach((file) => {
        formData.append("files", file);
      });
    } else {
      formData.append("files", files);
    }

    formData.append("type", type);

    const requestOptions = {
      method: "PUT",
      body: formData,
    };

    // Make request
    const data = await fetch(
      `${BASE_URL}/api/v1/admin/colleges/upload/file/${id}`,
      requestOptions
    );

    const result = await data.json();

    console.log(result);
    if (result.status === 200) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
