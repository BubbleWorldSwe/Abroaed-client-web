import { BASE_URL } from "../constants/baseUrl";
import { makePostRequest } from "../utils/apiUtils";

export const loginApi = async (credentials) => {
  try {
    const data = await makePostRequest(
      `${BASE_URL}/api/v1/auth/login`,
      credentials
    );
    //console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
