import { call, put, takeLatest } from "redux-saga/effects";
import {
  getTestPreps,
  setAddTestPrep,
  setDeleteTestPrep,
  setUpdateTestPrep,
} from "../../api/testPrepsApi"; // API functions
import {
  ADD_TESTPREP_REQUEST,
  addTestPrepFailure,
  addTestPrepSuccess,
  DELETE_TESTPREP_REQUEST,
  deleteTestPrepFailure,
  deleteTestPrepSuccess,
  EDIT_TESTPREP_REQUEST,
  editTestPrepFailure,
  editTestPrepSuccess,
  FETCH_TESTPREPS_REQUEST,
  fetchTestPrepsFailure,
  fetchTestPrepsSuccess,
} from "../actions/testPrepsActions";
import { toast } from "react-toastify";

// Fetch test preps
function* fetchTestPreps(action) {
  try {
    const data = yield call(getTestPreps, action.payload);
    yield put(fetchTestPrepsSuccess(data.data));
  } catch (error) {
    yield put(fetchTestPrepsFailure(error.message));
    toast.error(error.message);
  }
}

// Add a new test prep
function* addNewTestPrep(action) {
  try {
    const response = yield call(setAddTestPrep, action.payload);

    if (response.status === 200) {
      yield put(addTestPrepSuccess(response.data.data));
      toast.success(response.message);
    } else {
      yield put(addTestPrepFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addTestPrepFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a test prep
function* deleteTestPrep(action) {
  try {
    const response = yield call(setDeleteTestPrep, action.payload);
    console.log(response);

    if (response.status === 200) {
      yield put(deleteTestPrepSuccess(action.payload));
      toast.success(response.message);
    } else {
      yield put(deleteTestPrepFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(deleteTestPrepFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a test prep
function* handleEditTestPrep(action) {
  try {
    const { id, testPrepData } = action.payload;
    const response = yield call(setUpdateTestPrep, id, testPrepData);

    if (response.status === 200) {
      yield put(editTestPrepSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(editTestPrepFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editTestPrepFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for test preps
export default function* testPrepsSaga() {
  yield takeLatest(FETCH_TESTPREPS_REQUEST, fetchTestPreps);
  yield takeLatest(ADD_TESTPREP_REQUEST, addNewTestPrep);
  yield takeLatest(DELETE_TESTPREP_REQUEST, deleteTestPrep);
  yield takeLatest(EDIT_TESTPREP_REQUEST, handleEditTestPrep);
}
