import { BASE_URL } from "../constants/baseUrl";
import { makeGetRequest } from "../utils/apiUtils";

export const getAdmissionDocuments = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/destination/documents/list`
    );
    console.log(data);
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
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};
