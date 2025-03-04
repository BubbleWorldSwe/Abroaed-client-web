// Action Types for Teams
export const FETCH_TEAMS_REQUEST = "FETCH_TEAMS_REQUEST";
export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
export const FETCH_TEAMS_FAILURE = "FETCH_TEAMS_FAILURE";

export const FETCH_ALL_TEAMS_REQUEST = "FETCH_ALL_TEAMS_REQUEST";
export const FETCH_ALL_TEAMS_SUCCESS = "FETCH_ALL_TEAMS_SUCCESS";
export const FETCH_ALL_TEAMS_FAILURE = "FETCH_ALL_TEAMS_FAILURE";

export const ADD_TEAM_REQUEST = "ADD_TEAM_REQUEST";
export const ADD_TEAM_SUCCESS = "ADD_TEAM_SUCCESS";
export const ADD_TEAM_FAILURE = "ADD_TEAM_FAILURE";

export const EDIT_TEAM_REQUEST = "EDIT_TEAM_REQUEST";
export const EDIT_TEAM_SUCCESS = "EDIT_TEAM_SUCCESS";
export const EDIT_TEAM_FAILURE = "EDIT_TEAM_FAILURE";

export const DELETE_TEAM_REQUEST = "DELETE_TEAM_REQUEST";
export const DELETE_TEAM_SUCCESS = "DELETE_TEAM_SUCCESS";
export const DELETE_TEAM_FAILURE = "DELETE_TEAM_FAILURE";

export const fetchTeamsRequest = (page) => ({
  type: FETCH_TEAMS_REQUEST,
  payload: page,
});

export const fetchTeamsSuccess = (data) => ({
  type: FETCH_TEAMS_SUCCESS,
  payload: data,
});

export const fetchTeamsFailure = (error) => ({
  type: FETCH_TEAMS_FAILURE,
  payload: error,
});

export const fetchAllTeamsRequest = () => ({
  type: FETCH_ALL_TEAMS_REQUEST,
});

export const fetchAllTeamsSuccess = (data) => ({
  type: FETCH_ALL_TEAMS_SUCCESS,
  payload: data,
});

export const fetchAllTeamsFailure = (error) => ({
  type: FETCH_ALL_TEAMS_FAILURE,
  payload: error,
});

export const addTeamRequest = (teamData) => ({
  type: ADD_TEAM_REQUEST,
  payload: teamData,
});

export const addTeamSuccess = (data) => ({
  type: ADD_TEAM_SUCCESS,
  payload: data,
});

export const addTeamFailure = (error) => ({
  type: ADD_TEAM_FAILURE,
  payload: error,
});

export const deleteTeamRequest = (teamId) => ({
  type: DELETE_TEAM_REQUEST,
  payload: teamId,
});

export const deleteTeamSuccess = (teamId) => ({
  type: DELETE_TEAM_SUCCESS,
  payload: teamId,
});

export const deleteTeamFailure = (error) => ({
  type: DELETE_TEAM_FAILURE,
  payload: error,
});

export const editTeamRequest = (id, credentials) => ({
  type: EDIT_TEAM_REQUEST,
  payload: { id, credentials },
});

export const editTeamSuccess = (data) => ({
  type: EDIT_TEAM_SUCCESS,
  payload: data,
});

export const editTeamFailure = (error) => ({
  type: EDIT_TEAM_FAILURE,
  payload: error,
});
