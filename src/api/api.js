import { BASE_URL } from "../constants/baseUrl";
import { makeGetRequest, makePutRequest } from "../utils/apiUtils";

export const getAdmissionDocuments = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/documents/list`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getCurrencyList = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/currency/list`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getVisaTypesList = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/visaType/list`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getRoles = async () => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/roles`);

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAdminDashboard = async () => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/dashboard`);

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
