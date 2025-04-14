import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_STUDENT_PROFILE_REQUEST,
  STUDENT_APPLICATION_REQUEST,
  STUDENT_TRANSACTIONS_REQUEST,
  STUDENT_SAVEDPREFERENCES_REQUEST,
  STUDENT_PREPS_BATCHES_REQUEST,
  fetchStudentProfileSuccess,
  fetchStudentProfileFailure,
  fetchStudentApplicationSuccess,
  fetchStudentApplicationFailure,
  fetchStudentTransactionsSuccess,
  fetchStudentTransactionsFailure,
  fetchStudentSavedPreferencesSuccess,
  fetchStudentSavedPreferencesFailure,
  fetchStudentPrepsBatchesSuccess,
  fetchStudentPrepsBatchesFailure,
  editStudentProfileRequest,
  editStudentProfileFailure,
  EDIT_STUDENT_PROFILE_REQUEST,
  editStudentProfileSuccess,
} from "../actions/studentProfileActions";

import {
  getStudentApplications,
  getStudentTransactions,
  getStudentSavedPreferences,
  getStudentPrepsBatches,
  getStudentDetailsById,
  getStudentProfile,
  setEditStudentProfile,
  setUpdateStudent,
} from "../../api/studentsApi";

import { toast } from "react-toastify";
import { getLeadDetailsById } from "../../api/leadsApi";

// Fetch profile
function* handleFetchStudentProfile(action) {
  try {
    const response = yield call(getStudentProfile, action.payload);

    if (response.status === 200) {
      yield put(fetchStudentProfileSuccess(response.data?.result[0]));
      // toast.success("Profile fetched successfully!");
    } else {
      yield put(fetchStudentProfileFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(fetchStudentProfileFailure(error.message));
    toast.error("Failed to fetch student profile");
  }
}

function* handleEditStudentProfile(action) {
  try {
    const { userId, profileData, id } = action.payload;

    // First API call to update the student
    const response = yield call(setUpdateStudent, userId, profileData);
    console.log("handleEditStudent in Saga", response);

    if (response.status === 200) {
      // Second API call to get updated student details from lead
      const leadDetailsResponse = yield call(getLeadDetailsById, id);

      if (leadDetailsResponse.status === 200) {
        yield put(editStudentProfileSuccess(leadDetailsResponse.data));
        //  toast.success("Student updated successfully!");
      } else {
        yield put(editStudentProfileFailure(leadDetailsResponse.message));
        toast.error(leadDetailsResponse.message);
      }
    } else {
      yield put(editStudentProfileFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editStudentProfileFailure(error.message));
    toast.error(error.message);
  }
}

// Fetch applications
function* handleFetchStudentApplications(action) {
  try {
    const response = yield call(getStudentApplications, action.payload);

    if (response.status === 200) {
      console.log(response.data);
      yield put(fetchStudentApplicationSuccess(response.data.result));
      // toast.success("Student Application fetched successfully!");
    } else {
      yield put(fetchStudentApplicationSuccess(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(fetchStudentApplicationFailure(error.message));
    toast.error("Failed to fetch applications");
  }
}

// Fetch transactions
function* handleFetchStudentTransactions(action) {
  try {
    const response = yield call(getStudentTransactions, action.payload);

    if (response.status === 200) {
      yield put(fetchStudentTransactionsSuccess(response.data.result));
      //  toast.success("Student Transaction fetched successfully!");
    } else {
      yield put(fetchStudentTransactionsFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(fetchStudentTransactionsFailure(error.message));
    toast.error("Failed to fetch transactions");
  }
}

// Fetch saved preferences
function* handleFetchSavedPreferences(action) {
  try {
    const response = yield call(getStudentSavedPreferences, action.payload);

    if (response.status === 200) {
      yield put(fetchStudentSavedPreferencesSuccess(response.data.result));
      //  toast.success("Saved Prefrences fetched successfully!");
    } else {
      yield put(fetchStudentSavedPreferencesFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(fetchStudentSavedPreferencesFailure(error.message));
    toast.error("Failed to fetch saved preferences");
  }
}

// Fetch preps batches
function* handleFetchPrepsBatches(action) {
  try {
    const response = yield call(getStudentPrepsBatches, action.payload);
    yield put(fetchStudentPrepsBatchesSuccess(response.data));

    if (response.status === 200) {
      yield put(fetchStudentPrepsBatchesSuccess(response.data.result));
      //  toast.success("Prep Batches fetched successfully!");
    } else {
      yield put(fetchStudentPrepsBatchesFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(fetchStudentPrepsBatchesFailure(error.message));
    toast.error("Failed to fetch preps batches");
  }
}

// Root Saga
export default function* studentProfileSaga() {
  yield takeLatest(FETCH_STUDENT_PROFILE_REQUEST, handleFetchStudentProfile);
  yield takeLatest(STUDENT_APPLICATION_REQUEST, handleFetchStudentApplications);
  yield takeLatest(
    STUDENT_TRANSACTIONS_REQUEST,
    handleFetchStudentTransactions
  );
  yield takeLatest(
    STUDENT_SAVEDPREFERENCES_REQUEST,
    handleFetchSavedPreferences
  );
  yield takeLatest(STUDENT_PREPS_BATCHES_REQUEST, handleFetchPrepsBatches);
  yield takeLatest(EDIT_STUDENT_PROFILE_REQUEST, handleEditStudentProfile);
}
