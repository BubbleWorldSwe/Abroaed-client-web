import { BASE_URL } from "../constants/baseUrl";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "../utils/apiUtils";

export const getTeams = async (page) => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/users?page=${page}&limit=20`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTeamsByMembers = async () => {
  try {
    const data = await makeGetRequest(
      `${BASE_URL}/api/v1/admin/users?filter=members`
    );
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllTeams = async () => {
  console.log("getAllTeams");
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/users`);
    console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setAddTeam = async (credentials) => {
  try {
    console.log(credentials);

    const data = await makePostRequest(
      `${BASE_URL}/api/v1/auth/signup`,
      credentials
    );
    // console.log(data);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDeleteTeam = async (id) => {
  try {
    // console.log(credentials);

    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/users/${id}`
    );
    //  console.log(data);
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateTeam = async (id, credentials) => {
  try {
    console.log(id, credentials);

    const data = await makePutRequest(
      `${BASE_URL}/api/v1/admin/users/${id}`,
      credentials
    );
    //  console.log(data);
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
