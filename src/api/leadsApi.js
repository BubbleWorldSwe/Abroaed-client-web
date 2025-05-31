import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePatchRequestWithFormData,
  makePatchRequestWithToken,
  makePostRequest,
  makePostRequestWithFormData,
  makePostRequestWithToken,
  makePutRequest,
} from "../utils/apiUtils";

export const getLeads = async (page) => {
  try {
    const { adminToken } = store.getState().auth;
    const path = page ? `page=${page}&limit=${pageDataLimit}&` : "";

    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list?${path}filter={"type":"lead"}`,
      adminToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getFilterLeads = async (startDate, endDate, page) => {
  try {
    const { adminToken } = store.getState().auth;

    let url = `${BASE_URL}/api/v1/admin/leads/list?filter={"dateRange":{"startDate":"${startDate}","endDate":"${endDate}"},"dateColumn":"createdAt"}`;

    if (page) {
      url += `&page=${page}&limit=${pageDataLimit}`;
    }

    const data = await makeGetRequest(url, adminToken);

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getSearchLeads = async (query) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list?filter={"type":"lead"}&search=${query}`,
      adminToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllLeads = async () => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list`,
      adminToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddLead = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/leads/create`,
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

export const setUpdateStudentDocuments = async (docId, fileData) => {
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

export const setUploadBulkLead = async (fileData) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithFormData(
      `${BASE_URL}/api/v1/admin/leads/create-batch`,
      fileData
    );

    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateLead = async (id, credentials) => {
  try {
    const { adminToken } = store.getState().auth;

    const data = await makePatchRequestWithToken(
      `${BASE_URL}/api/v1/admin/leads/${id}`,
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

export const setUpdateStudent = async (id, credentials) => {
  try {
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

export const setDeleteLead = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/leads/${id}`
    );
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLeadDetailsById = async (id) => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/leads/${id}`);

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setLeadSubscribeBatch = async (
  lead,
  type,
  prepId,
  batchId,
  paymentId
) => {
  try {
    const data = await makePostRequest(
      `${BASE_URL}/api/v1/admin/subscribe-batches/create`,
      {
        lead,
        type,
        prepId,
        batchId,
        //paymentId
      }
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

//Saved Prefrences
export const getLeadSavedPrefrences = async (leadId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/save-preference/list?filter={"user":"${leadId}"}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getLeadDocuments = async (id) => {
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

export const setUploadLeadDocuments = async (id, fileData) => {
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

export const setUpdateLeadDocuments = async (docId, fileData) => {
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

export const setDeleteLeadDocument = async (id) => {
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
