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
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/colleges/create`,
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

export const setUpdateCollege = async (id, credentials) => {
  try {
    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/colleges/${id}`,
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

export const setDeleteCollege = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/colleges/${id}`
    );
    //
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCollegeDetailsById = async (id) => {
  try {
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

    const response = await fetch(
      `${BASE_URL}/api/v1/admin/colleges/upload/file/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    let result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || "Upload failed");
    }
  } catch (error) {
    console.error("Upload file error:", error);
    throw error;
  }
};

export const setDeleteCollegeImage = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/colleges/file/remove`,
      { ids: [id] }
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};
