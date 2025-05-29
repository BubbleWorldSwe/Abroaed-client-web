import { BASE_URL } from "../constants/baseUrl";
import { pageDataLimit } from "../constants/values";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePostRequestWithToken,
} from "../utils/apiUtils";

// Fetch paginated transactions
export const getTransactions = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/transaction/list?page=${page}&limit=${pageDataLimit}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

// Fetch all transactions
export const getAllTransactions = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/transaction/list`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

// Add a new transaction
export const setAddTransaction = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/admin/transaction/create`,
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

// Update a transaction
export const setUpdateTransaction = async (id, credentials) => {
  try {
    const data = await makePatchRequest(
      `${BASE_URL}/api/v1/admin/transaction/${id}`,
      credentials
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete a transaction
export const setDeleteTransaction = async (id) => {
  try {
    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/transaction/${id}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch transaction details by ID
export const getTransactionDetailsById = async (id) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/transaction/${id}`
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};
