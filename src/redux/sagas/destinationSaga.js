import { call, put, takeLatest } from "redux-saga/effects";
import { getDestinations, setAddDestination } from "../../api/destinationApi";
import {
  ADD_DESTINATION_REQUEST,
  addDestinationFailure,
  addDestinationSuccess,
  FETCH_DESTINATIONS_REQUEST,
  fetchDestinationsFailure,
  fetchDestinationsSuccess,
} from "../actions/destinationActions";
import { toast } from "react-toastify";

function* fetchDestinations(action) {
  try {
    const data = yield call(getDestinations, action.payload);

    console.log(data.data);
    yield put(fetchDestinationsSuccess(data.data));
  } catch (error) {
    yield put(fetchDestinationsFailure(error.message));
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

export default function* destinationSaga() {
  yield takeLatest(FETCH_DESTINATIONS_REQUEST, fetchDestinations);
  yield takeLatest(ADD_DESTINATION_REQUEST, addNewDestination);
}
