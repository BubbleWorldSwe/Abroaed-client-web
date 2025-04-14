export const FETCH_COLLEGES_REQUEST = "FETCH_COLLEGES_REQUEST";
export const FETCH_COLLEGES_SUCCESS = "FETCH_COLLEGES_SUCCESS";
export const FETCH_COLLEGES_FAILURE = "FETCH_COLLEGES_FAILURE";

export const ADD_COLLEGE_REQUEST = "ADD_COLLEGE_REQUEST";
export const ADD_COLLEGE_SUCCESS = "ADD_COLLEGE_SUCCESS";
export const ADD_COLLEGE_FAILURE = "ADD_COLLEGE_FAILURE";

export const DELETE_COLLEGE_REQUEST = "DELETE_COLLEGE_REQUEST";
export const DELETE_COLLEGE_SUCCESS = "DELETE_COLLEGE_SUCCESS";
export const DELETE_COLLEGE_FAILURE = "DELETE_COLLEGE_FAILURE";

export const EDIT_COLLEGE_REQUEST = "EDIT_COLLEGE_REQUEST";
export const EDIT_COLLEGE_SUCCESS = "EDIT_COLLEGE_SUCCESS";
export const EDIT_COLLEGE_FAILURE = "EDIT_COLLEGE_FAILURE";

export const UPLOAD_COLLEGE_IMAGE_REQUEST = "UPLOAD_COLLEGE_IMAGE_REQUEST";
export const UPLOAD_COLLEGE_IMAGE_SUCCESS = "UPLOAD_COLLEGE_IMAGE_SUCCESS";
export const UPLOAD_COLLEGE_IMAGE_FAILURE = "UPLOAD_COLLEGE_IMAGE_FAILURE";

export const SET_SELECTED_COLLEGE = "SET_SELECTED_COLLEGE";

export const fetchCollegesRequest = (page) => ({
  type: FETCH_COLLEGES_REQUEST,
  payload: page,
});

export const fetchCollegesSuccess = (data) => ({
  type: FETCH_COLLEGES_SUCCESS,
  payload: data,
});

export const fetchCollegesFailure = (error) => ({
  type: FETCH_COLLEGES_FAILURE,
  payload: error,
});

export const addCollegeRequest = (collegeData) => ({
  type: ADD_COLLEGE_REQUEST,
  payload: collegeData,
});

export const addCollegeSuccess = (college) => ({
  type: ADD_COLLEGE_SUCCESS,
  payload: college,
});

export const addCollegeFailure = (error) => ({
  type: ADD_COLLEGE_FAILURE,
  payload: error,
});

export const deleteCollegeRequest = (collegeId) => ({
  type: DELETE_COLLEGE_REQUEST,
  payload: collegeId,
});

export const deleteCollegeSuccess = (collegeId) => ({
  type: DELETE_COLLEGE_SUCCESS,
  payload: collegeId,
});

export const deleteCollegeFailure = (error) => ({
  type: DELETE_COLLEGE_FAILURE,
  payload: error,
});

export const editCollegeRequest = (id, collegeData) => ({
  type: EDIT_COLLEGE_REQUEST,
  payload: { id, collegeData },
});

export const editCollegeSuccess = (editedCollege) => ({
  type: EDIT_COLLEGE_SUCCESS,
  payload: editedCollege,
});

export const editCollegeFailure = (error) => ({
  type: EDIT_COLLEGE_FAILURE,
  payload: error,
});

export const setSelectedCollege = (college) => ({
  type: SET_SELECTED_COLLEGE,
  payload: college,
});

export const uploadCollegeImageRequest = (id, imageData) => ({
  type: UPLOAD_COLLEGE_IMAGE_REQUEST,
  payload: { id, imageData },
});

export const uploadCollegeImageSuccess = (data) => ({
  type: UPLOAD_COLLEGE_IMAGE_SUCCESS,
  payload: data,
});

export const uploadCollegeImageFailure = (error) => ({
  type: UPLOAD_COLLEGE_IMAGE_FAILURE,
  payload: error,
});
