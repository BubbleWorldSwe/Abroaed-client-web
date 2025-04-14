import { call, put, takeLatest } from "redux-saga/effects";
import {
  getColleges,
  setAddCollege,
  setCollegeUploadFile,
  setDeleteCollege,
  setUpdateCollege,
} from "../../api/collegesApi"; // API functions
import {
  ADD_COLLEGE_REQUEST,
  addCollegeFailure,
  addCollegeSuccess,
  DELETE_COLLEGE_REQUEST,
  deleteCollegeFailure,
  deleteCollegeSuccess,
  EDIT_COLLEGE_REQUEST,
  editCollegeFailure,
  editCollegeSuccess,
  FETCH_COLLEGES_REQUEST,
  fetchCollegesFailure,
  fetchCollegesSuccess,
  UPLOAD_COLLEGE_IMAGE_REQUEST,
  uploadCollegeImageFailure,
  uploadCollegeImageSuccess,
} from "../actions/collegeActions";
import { toast } from "react-toastify";
import { UPLOAD_ACCOMMODATION_IMAGE_REQUEST } from "../actions/accommodationActions";

// Fetch colleges
function* fetchColleges(action) {
  try {
    const data = yield call(getColleges, action.payload);
    yield put(fetchCollegesSuccess(data.data));
  } catch (error) {
    yield put(fetchCollegesFailure(error.message));
    toast.error(error.message);
  }
}

// Add a new college
function* addNewCollege(action) {
  try {
    const response = yield call(setAddCollege, action.payload);

    if (response.status === 200) {
      yield put(addCollegeSuccess(response.data.data));
      toast.success(response.message);
    } else {
      yield put(addCollegeFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addCollegeFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a college
function* deleteCollege(action) {
  try {
    const response = yield call(setDeleteCollege, action.payload);
    console.log(response);

    if (response.status === 200) {
      yield put(deleteCollegeSuccess(action.payload));
      toast.success(response.message);
    } else {
      yield put(deleteCollegeFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(deleteCollegeFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a college
function* handleEditCollege(action) {
  try {
    const { id, collegeData } = action.payload;
    const response = yield call(setUpdateCollege, id, collegeData);

    if (response.status === 200) {
      yield put(editCollegeSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(editCollegeFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editCollegeFailure(error.message));
    toast.error(error.message);
  }
}

// Upload a College Image
function* handleUploadCollegeImage(action) {
  try {
    const { id, imageData } = action.payload;
    const response = yield call(setCollegeUploadFile, id, imageData);

    if (response.status === 200) {
      yield put(uploadCollegeImageSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(uploadCollegeImageFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(uploadCollegeImageFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for colleges
export default function* collegesSaga() {
  yield takeLatest(FETCH_COLLEGES_REQUEST, fetchColleges);
  yield takeLatest(ADD_COLLEGE_REQUEST, addNewCollege);
  yield takeLatest(DELETE_COLLEGE_REQUEST, deleteCollege);
  yield takeLatest(EDIT_COLLEGE_REQUEST, handleEditCollege);
  yield takeLatest(UPLOAD_COLLEGE_IMAGE_REQUEST, handleUploadCollegeImage);
}
