import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllDestinations,
  getDestinations,
  setAddDestination,
  setDeleteDestination,
  setUpdateDestination,
} from "../../api/destinationApi";
import {
  ADD_DESTINATION_REQUEST,
  addDestinationFailure,
  addDestinationSuccess,
  DELETE_DESTINATION_REQUEST,
  deleteDestinationFailure,
  deleteDestinationSuccess,
  EDIT_DESTINATION_REQUEST,
  editDestinationFailure,
  editDestinationSuccess,
  FETCH_ALL_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_REQUEST,
  fetchAllDestinationsFailure,
  fetchAllDestinationsSuccess,
  fetchDestinationsFailure,
  fetchDestinationsSuccess,
} from "../actions/destinationActions";
import { toast } from "react-toastify";

function* fetchDestinations(action) {
  try {
    const data = yield call(getDestinations, action.payload);

    console.log(data);

    yield put(fetchDestinationsSuccess(data.data));
  } catch (error) {
    yield put(fetchDestinationsFailure(error.message));
    toast.error(error.message);
  }
}

function* fetchAllDestinations(action) {
  try {
    const data = yield call(getAllDestinations);

    yield put(fetchAllDestinationsSuccess(data.data));
  } catch (error) {
    yield put(fetchAllDestinationsFailure(error.message));
    toast.error(error.message);
  }
}

function* addNewDestination(action) {
  try {
    const response = yield call(setAddDestination, action.payload);

    console.log(response);

    if (response.status === 200) {
      yield put(addDestinationSuccess(response.data.data));
      toast.success("Destination added successfully!");
    } else {
      console.log("Error");
      yield put(addDestinationFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addDestinationFailure(error.message));
    toast.error(error.message);
  }
}

function* deleteDestination(action) {
  try {
    const response = yield call(setDeleteDestination, action.payload);

    if (response.success) {
      yield put(deleteDestinationSuccess(action.payload));
      toast.success("Destination Deleted successfully!");
    } else {
      yield put(deleteDestinationFailure(response.message));
    }
  } catch (error) {
    yield put(deleteDestinationFailure(error.message));
  }
}

// Edit destination saga
function* handleEditDestination(action) {
  try {
    const { id, destinationData } = action.payload;
    const response = yield call(setUpdateDestination, id, destinationData);
    console.log("handleEditDestination in Saga");
    console.log(response);
    console.log("handleEditDestination in Saga");

    if (response.status === 200) {
      yield put(editDestinationSuccess(response.data));
      toast.success("Destination Updated successfully!");
    } else {
      //  console.log(response.message);
      put(editDestinationFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editDestinationFailure(error.message));
  }
}

export default function* destinationSaga() {
  yield takeLatest(FETCH_DESTINATIONS_REQUEST, fetchDestinations);
  yield takeLatest(FETCH_ALL_DESTINATIONS_REQUEST, fetchAllDestinations);
  yield takeLatest(ADD_DESTINATION_REQUEST, addNewDestination);
  yield takeLatest(DELETE_DESTINATION_REQUEST, deleteDestination);
  yield takeLatest(EDIT_DESTINATION_REQUEST, handleEditDestination);
}
