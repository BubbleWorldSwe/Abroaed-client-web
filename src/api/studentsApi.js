import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePostRequestWithFormData,
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

export const setEditStudentProfile = async (id, credentials) => {
  try {
    console.log(credentials);

    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/leads/${id}`,
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

export const getStudentDocuments = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/document-upload/list/?filter={"userId":"${id}"}`
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUploadStudentDocuments = async (id, fileData) => {
  console.log(fileData);
  try {
    const data = await makePostRequestWithFormData(
      `${BASE_URL}/api/v1/admin/document-upload/file/${id}`,
      fileData
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateStudentDocuments = async (docId, fileData) => {
  console.log(fileData);
  try {
    const data = await makePostRequestWithFormData(
      `${BASE_URL}/api/v1/admin/document-upload/update/${docId}`,
      fileData
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDeleteStudentDocument = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/document-upload/${id}`
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

export const getStudentProfile = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list?filter={"user":"${id}"}`
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

//transactions
export const getStudentTransactions = async (leadId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/transaction/list?filter={"user":"${leadId}"}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

//Saved Prefrences
export const getStudentSavedPreferences = async (leadId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/save-preference/list?filter={"user":"${leadId}"}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

//Test & Language Preps
export const getStudentPrepsBatches = async (leadId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/subscribe-batches/list?filter={"lead":"${leadId}"}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};
