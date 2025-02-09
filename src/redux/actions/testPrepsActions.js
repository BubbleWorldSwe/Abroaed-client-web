export const FETCH_TESTPREPS_REQUEST = "FETCH_TESTPREPS_REQUEST";
export const FETCH_TESTPREPS_SUCCESS = "FETCH_TESTPREPS_SUCCESS";
export const FETCH_TESTPREPS_FAILURE = "FETCH_TESTPREPS_FAILURE";

export const ADD_TESTPREP_REQUEST = "ADD_TESTPREP_REQUEST";
export const ADD_TESTPREP_SUCCESS = "ADD_TESTPREP_SUCCESS";
export const ADD_TESTPREP_FAILURE = "ADD_TESTPREP_FAILURE";

export const DELETE_TESTPREP_REQUEST = "DELETE_TESTPREP_REQUEST";
export const DELETE_TESTPREP_SUCCESS = "DELETE_TESTPREP_SUCCESS";
export const DELETE_TESTPREP_FAILURE = "DELETE_TESTPREP_FAILURE";

export const EDIT_TESTPREP_REQUEST = "EDIT_TESTPREP_REQUEST";
export const EDIT_TESTPREP_SUCCESS = "EDIT_TESTPREP_SUCCESS";
export const EDIT_TESTPREP_FAILURE = "EDIT_TESTPREP_FAILURE";

export const SET_SELECTED_TESTPREP = "SET_SELECTED_TESTPREP";

export const fetchTestPrepsRequest = (page) => ({
  type: FETCH_TESTPREPS_REQUEST,
  payload: page,
});

export const fetchTestPrepsSuccess = (data) => ({
  type: FETCH_TESTPREPS_SUCCESS,
  payload: data,
});

export const fetchTestPrepsFailure = (error) => ({
  type: FETCH_TESTPREPS_FAILURE,
  payload: error,
});

export const addTestPrepRequest = (testPrepData) => ({
  type: ADD_TESTPREP_REQUEST,
  payload: testPrepData,
});

export const addTestPrepSuccess = (testPrep) => ({
  type: ADD_TESTPREP_SUCCESS,
  payload: testPrep,
});

export const addTestPrepFailure = (error) => ({
  type: ADD_TESTPREP_FAILURE,
  payload: error,
});

export const deleteTestPrepRequest = (testPrepId) => ({
  type: DELETE_TESTPREP_REQUEST,
  payload: testPrepId,
});

export const deleteTestPrepSuccess = (testPrepId) => ({
  type: DELETE_TESTPREP_SUCCESS,
  payload: testPrepId,
});

export const deleteTestPrepFailure = (error) => ({
  type: DELETE_TESTPREP_FAILURE,
  payload: error,
});

export const editTestPrepRequest = (id, testPrepData) => ({
  type: EDIT_TESTPREP_REQUEST,
  payload: { id, testPrepData },
});

export const editTestPrepSuccess = (editedTestPrep) => ({
  type: EDIT_TESTPREP_SUCCESS,
  payload: editedTestPrep,
});

export const editTestPrepFailure = (error) => ({
  type: EDIT_TESTPREP_FAILURE,
  payload: error,
});

export const setSelectedTestPrep = (testPrep) => ({
  type: SET_SELECTED_TESTPREP,
  payload: testPrep,
});
