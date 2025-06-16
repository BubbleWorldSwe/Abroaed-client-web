import { BASE_URL } from "../constants/baseUrl";
import { store } from "../redux/store";
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

export const getAdminDashboard = async (startDate, endDate, userId) => {
  try {
    const { adminToken } = store.getState().auth;

    const params = new URLSearchParams();
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (userId) params.append("userId", userId);

    const queryString = params.toString() ? `?${params.toString()}` : "";

    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/dashboard${queryString}`,
      adminToken
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
