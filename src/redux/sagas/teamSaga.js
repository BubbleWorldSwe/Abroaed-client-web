import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TEAMS_REQUEST,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  addTeamSuccess,
  addTeamFailure,
  ADD_TEAM_REQUEST,
  DELETE_TEAM_REQUEST,
  deleteTeamSuccess,
  deleteTeamFailure,
  editTeamSuccess,
  editTeamFailure,
  EDIT_TEAM_REQUEST,
  FETCH_ALL_TEAMS_REQUEST,
  fetchAllTeamsSuccess,
  fetchAllTeamsFailure,
} from "../actions/teamActions";

import {
  getAllTeams,
  getTeams,
  setAddTeam,
  setDeleteTeam,
  setUpdateTeam,
} from "../../api/teamsApi";
import { toast } from "react-toastify";

function* fetchTeams(action) {
  try {
    const response = yield call(getTeams, action.payload);

    console.log(response);

    if (response.status === 200) {
      yield put(fetchTeamsSuccess(response.data));
    } else {
      yield put(fetchTeamsFailure(response.message));
    }
  } catch (error) {
    yield put(fetchTeamsFailure(error.message));
    toast.error(error.message);
  }
}

function* fetchAllTeams() {
  try {
    const response = yield call(getAllTeams);

    yield put(fetchAllTeamsSuccess(response.data));
  } catch (error) {
    yield put(fetchAllTeamsFailure(error.message));
    //toast.error(error.message);
    console.log(error);
  }
}

function* addNewTeam(action) {
  try {
    const response = yield call(setAddTeam, action.payload);
    //  debugger;

    if (response.status === 201) {
      toast.success("Team added successfully!");
      yield put(addTeamSuccess(response.data.data));
    } else {
      yield put(addTeamFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addTeamFailure(error.message));
    toast.error(error.message);
  }
}

function* deleteTeam(action) {
  try {
    const response = yield call(setDeleteTeam, action.payload);

    if (response.success) {
      yield put(deleteTeamSuccess(action.payload));
      toast.success("Team Deleted successfully!");
    } else {
      yield put(deleteTeamFailure(response.message));
    }
  } catch (error) {
    yield put(deleteTeamFailure(error.message));
  }
}

function* handleEditTeam(action) {
  try {
    const { id, credentials } = action.payload;
    const response = yield call(setUpdateTeam, id, credentials);
    //  debugger;
    if (response && response.success) {
      yield put(editTeamSuccess(response.data.data));
      toast.success("Team Updated successfully!");
    } else {
      put(editTeamFailure(error.message));
      toast.error(response.message || "Update Failed");
    }
  } catch (error) {
    yield put(editTeamFailure(error.message));
  }
}

export default function* teamSaga() {
  yield takeLatest(FETCH_TEAMS_REQUEST, fetchTeams);
  yield takeLatest(FETCH_ALL_TEAMS_REQUEST, fetchAllTeams);
  yield takeLatest(ADD_TEAM_REQUEST, addNewTeam);
  yield takeLatest(DELETE_TEAM_REQUEST, deleteTeam);
  yield takeLatest(EDIT_TEAM_REQUEST, handleEditTeam);
}
