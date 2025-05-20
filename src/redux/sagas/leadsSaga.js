import { call, put, takeLatest } from "redux-saga/effects";
import {
  getLeadDetailsById,
  getLeads,
  getSearchLeads,
  setAddLead,
  setDeleteLead,
  setUpdateLead,
  setUpdateStudent,
} from "../../api/leadsApi";
import {
  ADD_LEAD_REQUEST,
  addLeadFailure,
  addLeadSuccess,
  DELETE_LEAD_REQUEST,
  deleteLeadFailure,
  deleteLeadSuccess,
  EDIT_LEAD_REQUEST,
  EDIT_LEADS_STUDENT_REQUEST,
  editLeadFailure,
  editLeadsStudentFailure,
  editLeadsStudentSuccess,
  editLeadSuccess,
  FETCH_LEADS_REQUEST,
  fetchLeadsFailure,
  fetchLeadsSuccess,
  SEARCH_LEADS_REQUEST,
  searchLeadsFailure,
  searchLeadsSuccess,
} from "../actions/leadsActions";
import { toast } from "react-toastify";

// Fetch leads with pagination
function* fetchLeads(action) {
  try {
    const data = yield call(getLeads, action.payload);

    if (data.status === 200) {
      yield put(fetchLeadsSuccess(data.data));
    } else {
      yield put(fetchLeadsFailure(data.message));
    }
  } catch (error) {
    yield put(fetchLeadsFailure(error.message));
    toast.error(error.message);
  }
}

// search lead
function* searchLeads(action) {
  try {
    const data = yield call(getSearchLeads, action.payload);

    if (data.status === 200) {
      yield put(searchLeadsSuccess(data.data));
    } else {
      yield put(searchLeadsFailure(data.message));
    }
  } catch (error) {
    yield put(searchLeadsFailure(error.message));
    toast.error(error.message);
  }
}

// Add new lead
function* addNewLead(action) {
  try {
    const response = yield call(setAddLead, action.payload?.leadData);
    console.log(response);

    if (response.status === 200) {
      yield put(addLeadSuccess(response.data));
      toast.success(
        action.payload?.alertMsg ||
          "Your Request has been submitted successfully!"
      );
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

    debugger;

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

function* handleEditLeadStudent(action) {
  try {
    const { userId, leadData, leadId } = action.payload;

    // First API call to update the student
    const response = yield call(setUpdateStudent, userId, leadData);
    console.log("handleEditStudent in Saga", response);

    if (response.status === 200) {
      // Second API call to get updated student details from lead
      const leadDetailsResponse = yield call(getLeadDetailsById, leadId);

      if (leadDetailsResponse.status === 200) {
        yield put(editLeadsStudentSuccess(leadDetailsResponse.data));
        toast.success("Student updated successfully!");
      } else {
        yield put(editLeadsStudentFailure(leadDetailsResponse.message));
        toast.error(leadDetailsResponse.message);
      }
    } else {
      yield put(editLeadsStudentFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editLeadsStudentFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for leads
export default function* leadsSaga() {
  yield takeLatest(FETCH_LEADS_REQUEST, fetchLeads);

  yield takeLatest(ADD_LEAD_REQUEST, addNewLead);
  yield takeLatest(DELETE_LEAD_REQUEST, deleteLead);
  yield takeLatest(EDIT_LEAD_REQUEST, handleEditLead);
  yield takeLatest(EDIT_LEADS_STUDENT_REQUEST, handleEditLeadStudent);

  yield takeLatest(SEARCH_LEADS_REQUEST, searchLeads);
}
