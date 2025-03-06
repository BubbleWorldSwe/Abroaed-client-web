import { call, put, takeLatest } from "redux-saga/effects";
import {
  getLeads,
  setAddLead,
  setDeleteLead,
  setUpdateLead,
} from "../../api/leadsApi";
import {
  ADD_LEAD_REQUEST,
  addLeadFailure,
  addLeadSuccess,
  DELETE_LEAD_REQUEST,
  deleteLeadFailure,
  deleteLeadSuccess,
  EDIT_LEAD_REQUEST,
  editLeadFailure,
  editLeadSuccess,
  FETCH_LEADS_REQUEST,
  fetchLeadsFailure,
  fetchLeadsSuccess,
} from "../actions/leadsActions";
import { toast } from "react-toastify";

// Fetch leads with pagination
function* fetchLeads(action) {
  try {
    const data = yield call(getLeads, action.payload);
    console.log(data);
    yield put(fetchLeadsSuccess(data.data));
  } catch (error) {
    yield put(fetchLeadsFailure(error.message));
    toast.error(error.message);
  }
}

// Add new lead
function* addNewLead(action) {
  try {
    const response = yield call(setAddLead, action.payload);
    console.log(response);

    if (response.status === 200) {
      yield put(addLeadSuccess(response.data));
      toast.success("Lead added successfully!");
    } else {
      yield put(addLeadFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addLeadFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a lead
function* deleteLead(action) {
  try {
    const response = yield call(setDeleteLead, action.payload);

    if (response.success) {
      yield put(deleteLeadSuccess(action.payload));
      toast.success("Lead deleted successfully!");
    } else {
      yield put(deleteLeadFailure(response.message));
    }
  } catch (error) {
    yield put(deleteLeadFailure(error.message));
  }
}

// Edit a lead
function* handleEditLead(action) {
  try {
    const { id, leadData } = action.payload;
    const response = yield call(setUpdateLead, id, leadData);
    console.log("handleEditLead in Saga", response);

    if (response.status === 200) {
      yield put(editLeadSuccess(response.data));
      toast.success("Lead updated successfully!");
    } else {
      yield put(editLeadFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editLeadFailure(error.message));
  }
}

// Edit a Student
function* handleEditStudent(action) {
  try {
    const { id, leadData } = action.payload;
    const response = yield call(setUpdateLead, id, leadData);
    console.log("handleEditLead in Saga", response);

    if (response.status === 200) {
      yield put(editLeadSuccess(response.data));
      toast.success("Lead updated successfully!");
    } else {
      yield put(editLeadFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editLeadFailure(error.message));
  }
}

// Root saga for leads
export default function* leadsSaga() {
  yield takeLatest(FETCH_LEADS_REQUEST, fetchLeads);

  yield takeLatest(ADD_LEAD_REQUEST, addNewLead);
  yield takeLatest(DELETE_LEAD_REQUEST, deleteLead);
  yield takeLatest(EDIT_LEAD_REQUEST, handleEditLead);
}
