export const GET_ROLES_REQUEST = "GET_ROLES_REQUEST";
export const GET_ROLES_SUCCESS = "GET_ROLES_SUCCESS";
export const GET_ROLES_FAILURE = "GET_ROLES_FAILURE";

export const fetchRolesRequest = () => ({
  type: GET_ROLES_REQUEST,
});

export const fetchRolesSuccess = (data) => ({
  type: GET_ROLES_SUCCESS,
  payload: data,
});

export const fetchRolesFailure = (error) => ({
  type: GET_ROLES_FAILURE,
  payload: error,
});
