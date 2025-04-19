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

export const EDIT_STUDENT_LEADS_REQUEST = "EDIT_STUDENT_LEADS_REQUEST";
export const EDIT_STUDENT_LEADS_SUCCESS = "EDIT_STUDENT_LEADS_SUCCESS";
export const EDIT_STUDENT_LEADS_FAILURE = "EDIT_STUDENT_LEADS_FAILURE";

export const ADD_STUDENT_APPLICATION = "ADD_STUDENT_APPLICATION";
export const ADD_STUDENT_TRANSACTIONS = "ADD_STUDENT_TRANSACTIONS";
export const ADD_STUDENT_SAVEDPREFRENCES = "ADD_STUDENT_SAVEDPREFRENCES";
export const ADD_STUDENT_PREPS_BATCHES = "ADD_STUDENT_PREPS_BATCHES";
export const ADD_STUDENT_DOCUMENTS = "ADD_STUDENT_DOCUMENTS";

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

export const addStudentApplication = (student) => {
  console.log(student);
  return {
    type: ADD_STUDENT_APPLICATION,
    payload: student,
  };
};

export const addStudentTransaction = (student) => {
  console.log(student);
  return {
    type: ADD_STUDENT_TRANSACTIONS,
    payload: student,
  };
};

export const addStudentSavedPrefrences = (student) => {
  return {
    type: ADD_STUDENT_SAVEDPREFRENCES,
    payload: student,
  };
};

export const addStudentPrepsBatches = (student) => {
  return {
    type: ADD_STUDENT_PREPS_BATCHES,
    payload: student,
  };
};

export const addStudentDocuments = (docs) => {
  return {
    type: ADD_STUDENT_DOCUMENTS,
    payload: docs,
  };
};

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

// Edit Lead
export const editStudentLeadRequest = (id, studentData) => ({
  type: EDIT_STUDENT_LEADS_REQUEST,
  // payload: { userId, leadData, leadId },
  payload: { id, studentData },
});

export const editStudentLeadSuccess = (editedLead) => ({
  type: EDIT_STUDENT_LEADS_SUCCESS,
  payload: editedLead,
});

export const editStudentLeadFailure = (error) => ({
  type: EDIT_STUDENT_LEADS_FAILURE,
  payload: error,
});

// Edit Student
export const editStudentRequest = (userId, studentData, leadId) => ({
  type: EDIT_STUDENT_REQUEST,

  payload: { userId, studentData, leadId },
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
