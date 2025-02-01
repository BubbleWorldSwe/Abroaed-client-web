import { BASE_URL } from "../constants/baseUrl";
import { makeGetRequest, makePostRequest } from "../utils/apiUtils";

export const getCountries = async (query) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/course-management/country?search=${query}`
    );
    //console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
