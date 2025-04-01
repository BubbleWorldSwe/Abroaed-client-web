import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import {
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePutRequest,
} from "../utils/apiUtils";

export const getStudents = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list?page=${page}&limit=${pageDataLimit}&filter={"type":"student"}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllStudents = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list?filter={"type":"student"}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setUpdateStudent = async (id, credentials) => {
  try {
    console.log(credentials, id);

    const data = await makePutRequest(
      `${BASE_URL}/api/v1/admin/users/${id}`,
      credentials
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setCreateStudentApplication = async (credentials) => {
  try {
    console.log(credentials);

    const data = await makePostRequest(
      `${BASE_URL}/api/v1/admin/applications/create`,
      credentials
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStudentApplications = async (leadId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/applications/list?filter={"lead":"${leadId}"}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setUpdateStudentApplication = async (credentials, appId) => {
  try {
    console.log(credentials);

    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/applications/${appId}`,
      credentials
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStudentDetailsById = async (userId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/${userId}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
