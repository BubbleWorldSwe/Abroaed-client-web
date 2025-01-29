import { BASE_URL } from "../constants/baseUrl";
import { makeGetRequest, makePostRequest } from "../utils/apiUtils";

export const getRoles = async () => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/roles`);
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
