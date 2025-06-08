import { BASE_URL } from "../constants/baseUrl";
import { store } from "../redux/store";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequestWithToken,
  makePutRequest,
} from "../utils/apiUtils";

export const getTeams2 = async (page) => {
  try {
    const { role } = store.getState().auth;

    const data = await makeGetRequest(
      // `${BASE_URL}/api/v1/admin/users?page=${page}&limit=${pageDataLimit}`
      `${BASE_URL}/api/v1/admin/users`
    );

    if (data.success) {
      let result = data.data;

      console.log(result);

      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTeams = async (page) => {
  try {
    const { role } = store.getState().auth;

    const data = await makeGetRequest(
      // `${BASE_URL}/api/v1/admin/users?page=${page}&limit=${pageDataLimit}`
      `${BASE_URL}/api/v1/admin/users`
    );

    if (data.success) {
      let result = data?.data?.data.result;

      // 🔥 Apply role-based filtering
      if (role === "Backend Manager") {
        result = result.filter(
          (member) => member.roleId?.roleName === "Backend Associate"
        );
      } else if (role === "Counsellor Manager") {
        result = result.filter(
          (member) => member.roleId?.roleName === "Counsellor"
        );
      }

      const response = data.data.data;

      return {
        data: {
          result,

          page: response?.page,

          total: result.length,
          totalPages: response?.totalPages,
        },
        status: data?.data?.status,
        message: data?.data?.message,
      };
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

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllTeams = async () => {
  try {
    const data = await makeGetRequest(`${BASE_URL}/api/v1/admin/users`);

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setAddTeam = async (credentials) => {
  try {
    const { adminToken } = store.getState().auth;
    const data = await makePostRequestWithToken(
      `${BASE_URL}/api/v1/auth/signup`,
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

export const setDeleteTeam = async (id) => {
  try {
    // console.log(credentials);

    const data = await makeDeleteRequest(
      `${BASE_URL}/api/v1/admin/users/${id}`
    );
    //
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUpdateTeam = async (id, credentials) => {
  try {
    const data = await makePutRequest(
      `${BASE_URL}/api/v1/admin/users/${id}`,
      credentials
    );
    //
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
