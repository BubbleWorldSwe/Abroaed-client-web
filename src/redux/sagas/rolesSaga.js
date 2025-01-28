import { call, put, takeLatest } from "redux-saga/effects";

import { getRoles } from "../../api/rolesApi";
import {
  GET_ROLES_REQUEST,
  fetchRolesSuccess,
  fetchRolesFailure,
} from "../actions/rolesActions";

function* fetchRoles() {
  try {
    const roles = yield call(getRoles);
    yield put(fetchRolesSuccess(roles));
  } catch (error) {
    yield put(fetchRolesFailure(error.message || "Failed to fetch roles"));
  }
}

export function* rolesSaga() {
  yield takeLatest(GET_ROLES_REQUEST, fetchRoles);
}
