import { BASE_URL } from "../constants/baseUrl";
import { makeGetRequest, makePostRequest } from "../utils/apiUtils";

export const getCountries = async (query) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/course-management/country?search=${query}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllCountries = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/course-management/country`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStatesByCountryId = async (countryId) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/course-management/country?countryId=${countryId}`
    );

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
