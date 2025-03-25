import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAccommodations,
  setAddAccommodation,
  setDeleteAccommodation,
  setUpdateAccommodation,
} from "../../api/accomodationApi"; // API functions
import {
  ADD_ACCOMMODATION_REQUEST,
  addAccommodationFailure,
  addAccommodationSuccess,
  DELETE_ACCOMMODATION_REQUEST,
  deleteAccommodationFailure,
  deleteAccommodationSuccess,
  EDIT_ACCOMMODATION_REQUEST,
  editAccommodationFailure,
  editAccommodationSuccess,
  FETCH_ACCOMMODATIONS_REQUEST,
  fetchAccommodationsFailure,
  fetchAccommodationsSuccess,
} from "../actions/accommodationActions";
import { toast } from "react-toastify";

// Fetch accommodations
function* fetchAccommodations(action) {
  try {
    const data = yield call(getAccommodations, action.payload);
    yield put(fetchAccommodationsSuccess(data.data));
  } catch (error) {
    yield put(fetchAccommodationsFailure(error.message));
    //  console.log(error.message);
    toast.error(error.message);
  }
}

// Add a new accommodation
function* addNewAccommodation(action) {
  try {
    const response = yield call(setAddAccommodation, action.payload);

    if (response.status === 200) {
      yield put(addAccommodationSuccess(response.data.data));
      toast.success(response.message);
    } else {
      yield put(addAccommodationFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addAccommodationFailure(error.message));
    toast.error(error.message);
  }
}

// Delete an accommodation
function* deleteAccommodation(action) {
  try {
    const response = yield call(setDeleteAccommodation, action.payload);

    if (response.status === 200) {
      yield put(deleteAccommodationSuccess(action.payload));
      toast.success(response.message);
    } else {
      yield put(deleteAccommodationFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(deleteAccommodationFailure(error.message));
    toast.error(error.message);
  }
}

// Edit an accommodation
function* handleEditAccommodation(action) {
  try {
    const { id, accommodationData } = action.payload;
    const response = yield call(setUpdateAccommodation, id, accommodationData);

    if (response.status === 200) {
      yield put(editAccommodationSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(editAccommodationFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editAccommodationFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for accommodations
export default function* accommodationsSaga() {
  yield takeLatest(FETCH_ACCOMMODATIONS_REQUEST, fetchAccommodations);
  yield takeLatest(ADD_ACCOMMODATION_REQUEST, addNewAccommodation);
  yield takeLatest(DELETE_ACCOMMODATION_REQUEST, deleteAccommodation);
  yield takeLatest(EDIT_ACCOMMODATION_REQUEST, handleEditAccommodation);
}
