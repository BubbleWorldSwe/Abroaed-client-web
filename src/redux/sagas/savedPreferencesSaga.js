import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSavedPreferences,
  setAddSavedPreference,
  setDeleteSavedPreference,
  setUpdateSavedPreference,
} from "../../api/savedPreferencesApi"; // API functions
import {
  ADD_SAVEDPREFERENCE_REQUEST,
  addSavedPreferenceFailure,
  addSavedPreferenceSuccess,
  DELETE_SAVEDPREFERENCE_REQUEST,
  deleteSavedPreferenceFailure,
  deleteSavedPreferenceSuccess,
  EDIT_SAVEDPREFERENCE_REQUEST,
  editSavedPreferenceFailure,
  editSavedPreferenceSuccess,
  FETCH_SAVEDPREFERENCES_REQUEST,
  fetchSavedPreferencesFailure,
  fetchSavedPreferencesSuccess,
} from "../actions/savedPreferencesActions";
import { toast } from "react-toastify";

// Fetch saved preferences
function* fetchSavedPreferences(action) {
  try {
    const data = yield call(getSavedPreferences, action.payload);

    console.log(data);

    if (data.status === 200) {
      yield put(fetchSavedPreferencesSuccess(data.data));
    } else {
      yield put(fetchSavedPreferencesFailure(data.message));
    }
  } catch (error) {
    yield put(fetchSavedPreferencesFailure(error.message));
    //  toast.error(error.message);
  }
}

// Add a new saved preference
function* addNewSavedPreference(action) {
  try {
    const response = yield call(setAddSavedPreference, action.payload);

    if (response.status === 200) {
      yield put(addSavedPreferenceSuccess(response?.data));
      //toast.success(response.message);
    } else {
      yield put(addSavedPreferenceFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addSavedPreferenceFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a saved preference
function* deleteSavedPreference(action) {
  try {
    const response = yield call(setDeleteSavedPreference, action.payload);

    if (response.status === 200) {
      yield put(deleteSavedPreferenceSuccess(action.payload));
      // toast.success(response.message);
    } else {
      yield put(deleteSavedPreferenceFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(deleteSavedPreferenceFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a saved preference
function* handleEditSavedPreference(action) {
  try {
    const { id, preferenceData } = action.payload;
    const response = yield call(setUpdateSavedPreference, id, preferenceData);

    if (response.status === 200) {
      yield put(editSavedPreferenceSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(editSavedPreferenceFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editSavedPreferenceFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for saved preferences
export default function* savedPreferencesSaga() {
  yield takeLatest(FETCH_SAVEDPREFERENCES_REQUEST, fetchSavedPreferences);
  yield takeLatest(ADD_SAVEDPREFERENCE_REQUEST, addNewSavedPreference);
  yield takeLatest(DELETE_SAVEDPREFERENCE_REQUEST, deleteSavedPreference);
  yield takeLatest(EDIT_SAVEDPREFERENCE_REQUEST, handleEditSavedPreference);
}
