import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
  makePostRequestWithToken,
  makePutRequest,
  makePutRequestWithFormData,
} from "../utils/apiUtils";

export const getBlogs = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/blogs/post?page=${page}&limit=${pageDataLimit}`
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllBlogs = async () => {
  console.log("getAllBlogs");
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/blogs/post`);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddBlog = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/blogs/post/create`,
      credentials,
      adminToken
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateBlog = async (id, credentials) => {
  try {
    const data = await makePutRequest(
      `${BASE_URL}/api/v1/admin/blogs/post/${id}`,
      credentials
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDeleteBlog = async (id) => {
  console.log(id);
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/blogs/post/${id}`
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBlogDetailsById = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/blogs/post/${id}`
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getBlogsCategory = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/blogs/category`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBlogsByCategoryId = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/blogs/category/${id}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setBlogUploadFile = async (id, imageData) => {
  try {
    console.log(imageData);
    const { files } = imageData;
    const { adminToken } = store.getState().auth;
    const data = await makePutRequestWithFormData(
      `${BASE_URL}/api/v1/admin/blogs/post/upload/file/${id}`,
      {
        files,
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
