import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TEAMS_REQUEST,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  addTeamSuccess,
  addTeamFailure,
  ADD_TEAM_REQUEST,
  DELETE_TEAM_FAILURE,
  DELETE_TEAM_REQUEST,
  deleteTeamSuccess,
  deleteTeamFailure,
  editTeamSuccess,
  editTeamFailure,
  EDIT_TEAM_REQUEST,
} from "../actions/teamActions";

import {
  getTeams,
  setAddTeam,
  setDeleteTeam,
  setUpdateTeam,
} from "../../api/teamsApi";
import { toast } from "react-toastify";

function* fetchTeams(action) {
  console.log(action);
  try {
    const response = yield call(getTeams, action.payload);

    yield put(fetchTeamsSuccess(response.data));
  } catch (error) {
    yield put(fetchTeamsFailure(error.message));
    toast.error(error.message);
  }
}
function* addNewTeam(action) {
  try {
    const response = yield call(setAddTeam, action.payload);

    //  console.log(response);

    if (response.status === 201) {
      yield put(addTeamSuccess(action.payload));
      toast.success("Team added successfully!");
    } else {
      console.log("Error");
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
    // Call the API to delete the team
    const response = yield call(setDeleteTeam, action.payload);

    if (response.success) {
      yield put(deleteTeamSuccess(action.payload));
      toast.success("Team Deleted successfully!");
    } else {
      yield put(deleteTeamFailure(response.message));
    }
  } catch (error) {
    // Dispatch the failure action with the error
    yield put({ type: DELETE_TEAM_FAILURE, payload: error.message });
  }
}

function* handleEditTeam(action) {
  try {
    const { id, credentials } = action.payload;
    const response = yield call(setUpdateTeam, id, credentials);
    if (response && response.success) {
      yield put(editTeamSuccess(response));
      toast.success("Team Updated successfully!");
    } else {
      throw new Error(response.message || "Update failed");
    }
  } catch (error) {
    yield put(editTeamFailure(error.message));
  }
}

export default function* teamSaga() {
  yield takeLatest(FETCH_TEAMS_REQUEST, fetchTeams);
  yield takeLatest(ADD_TEAM_REQUEST, addNewTeam);
  yield takeLatest(DELETE_TEAM_REQUEST, deleteTeam);
  yield takeLatest(EDIT_TEAM_REQUEST, handleEditTeam);
}
