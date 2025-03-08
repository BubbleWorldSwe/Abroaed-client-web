export const FETCH_STUDENTS_REQUEST = "FETCH_STUDENTS_REQUEST";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";

export const ADD_STUDENT_REQUEST = "ADD_STUDENT_REQUEST";
export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";
export const ADD_STUDENT_FAILURE = "ADD_STUDENT_FAILURE";

export const DELETE_STUDENT_REQUEST = "DELETE_STUDENT_REQUEST";
export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
export const DELETE_STUDENT_FAILURE = "DELETE_STUDENT_FAILURE";

export const EDIT_STUDENT_REQUEST = "EDIT_STUDENT_REQUEST";
export const EDIT_STUDENT_SUCCESS = "EDIT_STUDENT_SUCCESS";
export const EDIT_STUDENT_FAILURE = "EDIT_STUDENT_FAILURE";

export const SET_SELECTED_STUDENT = "SET_SELECTED_STUDENT";

export const fetchStudentsRequest = (page) => ({
  type: FETCH_STUDENTS_REQUEST,
  payload: page,
});

export const fetchStudentsSuccess = (data) => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: data,
});

export const fetchStudentsFailure = (error) => ({
  type: FETCH_STUDENTS_FAILURE,
  payload: error,
});

export const fetchAllStudentsRequest = () => ({
  type: FETCH_ALL_STUDENTS_REQUEST,
});

export const fetchAllStudentsSuccess = (data) => ({
  type: FETCH_ALL_STUDENTS_SUCCESS,
  payload: data,
});

export const fetchAllStudentsFailure = (error) => ({
  type: FETCH_ALL_STUDENTS_FAILURE,
  payload: error,
});

export const addStudentRequest = (studentData) => ({
  type: ADD_STUDENT_REQUEST,
  payload: studentData,
});

export const addStudentSuccess = (student) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student,
});

export const addStudentFailure = (error) => ({
  type: ADD_STUDENT_FAILURE,
  payload: error,
});

export const deleteStudentRequest = (studentId) => ({
  type: DELETE_STUDENT_REQUEST,
  payload: studentId,
});

export const deleteStudentSuccess = (studentId) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: studentId,
});

export const deleteStudentFailure = (error) => ({
  type: DELETE_STUDENT_FAILURE,
  payload: error,
});

export const editStudentRequest = (id, studentData) => ({
  type: EDIT_STUDENT_REQUEST,
  payload: { id, studentData },
});

export const editStudentSuccess = (editedStudent) => ({
  type: EDIT_STUDENT_SUCCESS,
  payload: editedStudent,
});

export const editStudentFailure = (error) => ({
  type: EDIT_STUDENT_FAILURE,
  payload: error,
});

export const setSelectedStudent = (student) => ({
  type: SET_SELECTED_STUDENT,
  payload: student,
});
