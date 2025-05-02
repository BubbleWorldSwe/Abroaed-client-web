import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllLanguagePreps,
  getLanguagePreps,
  setAddLanguagePrep,
  setDeleteLanguagePrep,
  setLanguagePrepUploadFile,
  setUpdateLanguagePrep,
} from "../../api/languagePrepsApi"; // API functions
import {
  ADD_LANGUAGEPREP_REQUEST,
  addLanguagePrepFailure,
  addLanguagePrepSuccess,
  DELETE_LANGUAGEPREP_REQUEST,
  deleteLanguagePrepFailure,
  deleteLanguagePrepSuccess,
  EDIT_LANGUAGEPREP_REQUEST,
  editLanguagePrepFailure,
  editLanguagePrepSuccess,
  FETCH_ALL_LANGUAGEPREPS_REQUEST,
  FETCH_LANGUAGEPREPS_REQUEST,
  fetchAllLanguagePrepsFailure,
  fetchAllLanguagePrepsSuccess,
  fetchLanguagePrepsFailure,
  fetchLanguagePrepsSuccess,
  UPLOAD_LANGUAGEPREP_IMAGE_REQUEST,
  uploadLanguagePrepImageFailure,
  uploadLanguagePrepImageSuccess,
} from "../actions/languagePrepsActions";
import { toast } from "react-toastify";

// Fetch language preps
function* fetchLanguagePreps(action) {
  try {
    const data = yield call(getLanguagePreps, action.payload);

    if (data.status === 200) {
      yield put(fetchLanguagePrepsSuccess(data.data));
    } else {
      yield put(fetchLanguagePrepsFailure(data.message));
    }
  } catch (error) {
    yield put(fetchLanguagePrepsFailure(error.message));
    toast.error(error.message);
  }
}

function* fetchAllLanguagePreps() {
  try {
    const data = yield call(getAllLanguagePreps);

    if (data.status === 200) {
      yield put(fetchAllLanguagePrepsSuccess(data.data));
    } else {
      yield put(fetchAllLanguagePrepsFailure(data.message));
    }
  } catch (error) {
    yield put(fetchAllLanguagePrepsFailure(error.message));
    // toast.error(error.message);
    console.log(error.message);
  }
}

// Add a new language prep
function* addNewLanguagePrep(action) {
  try {
    const response = yield call(setAddLanguagePrep, action.payload);

    if (response.status === 200) {
      yield put(addLanguagePrepSuccess(response.data.data));
      toast.success(response.message);
    } else {
      yield put(addLanguagePrepFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addLanguagePrepFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a language prep
function* deleteLanguagePrep(action) {
  try {
    const response = yield call(setDeleteLanguagePrep, action.payload);
    console.log(response);

    if (response.status === 200) {
      yield put(deleteLanguagePrepSuccess(action.payload));
      toast.success(response.message);
    } else {
      yield put(deleteLanguagePrepFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(deleteLanguagePrepFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a language prep
function* handleEditLanguagePrep(action) {
  try {
    const { id, languagePrepData } = action.payload;
    const response = yield call(setUpdateLanguagePrep, id, languagePrepData);

    if (response.status === 200) {
      yield put(editLanguagePrepSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(editLanguagePrepFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editLanguagePrepFailure(error.message));
    toast.error(error.message);
  }
}

// Upload a language prep Image
function* handleUploadLanguagePrepImage(action) {
  try {
    const { id, imageData } = action.payload;
    const response = yield call(setLanguagePrepUploadFile, id, imageData);

    if (response.status === 200) {
      yield put(uploadLanguagePrepImageSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(uploadLanguagePrepImageFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(uploadLanguagePrepImageFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for language preps
export default function* languagePrepsSaga() {
  yield takeLatest(FETCH_LANGUAGEPREPS_REQUEST, fetchLanguagePreps);
  yield takeLatest(FETCH_ALL_LANGUAGEPREPS_REQUEST, fetchAllLanguagePreps);
  yield takeLatest(ADD_LANGUAGEPREP_REQUEST, addNewLanguagePrep);
  yield takeLatest(DELETE_LANGUAGEPREP_REQUEST, deleteLanguagePrep);
  yield takeLatest(EDIT_LANGUAGEPREP_REQUEST, handleEditLanguagePrep);
  yield takeLatest(
    UPLOAD_LANGUAGEPREP_IMAGE_REQUEST,
    handleUploadLanguagePrepImage
  );
}
