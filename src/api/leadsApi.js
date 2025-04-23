import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePostRequestWithToken,
  makePutRequest,
} from "../utils/apiUtils";

export const getLeads = async (page) => {
  try {
    const path = page ? `page=${page}&limit=${pageDataLimit}&` : "";

    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list?${path}filter={"type":"lead"}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getSearchLeads = async (query) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/leads/list?filter={"type":"lead"}&search=${query}`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllLeads = async () => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/leads/list`);
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const setAddLead = async (credentials) => {
  try {
    console.log(credentials);
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

export const setUpdateLead = async (id, credentials) => {
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

export const setUpdateStudent = async (id, credentials) => {
  try {
    console.log(credentials);

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
    console.log(id + " id");

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
    console.log(id);
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
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};
