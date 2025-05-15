export const FETCH_LEADS_REQUEST = "FETCH_LEADS_REQUEST";
export const FETCH_LEADS_SUCCESS = "FETCH_LEADS_SUCCESS";
export const FETCH_LEADS_FAILURE = "FETCH_LEADS_FAILURE";

export const SEARCH_LEADS_REQUEST = "SEARCH_LEADS_REQUEST";
export const SEARCH_LEADS_SUCCESS = "SEARCH_LEADS_SUCCESS";
export const SEARCH_LEADS_FAILURE = "SEARCH_LEADS_FAILURE";

export const ADD_LEAD_REQUEST = "ADD_LEAD_REQUEST";
export const ADD_LEAD_SUCCESS = "ADD_LEAD_SUCCESS";
export const ADD_LEAD_FAILURE = "ADD_LEAD_FAILURE";

export const DELETE_LEAD_REQUEST = "DELETE_LEAD_REQUEST";
export const DELETE_LEAD_SUCCESS = "DELETE_LEAD_SUCCESS";
export const DELETE_LEAD_FAILURE = "DELETE_LEAD_FAILURE";

export const EDIT_LEAD_REQUEST = "EDIT_LEAD_REQUEST";
export const EDIT_LEAD_SUCCESS = "EDIT_LEAD_SUCCESS";
export const EDIT_LEAD_FAILURE = "EDIT_LEAD_FAILURE";

export const FETCH_LEADS_STUDENTS_REQUEST = "FETCH_LEADS_STUDENTS_REQUEST";
export const FETCH_LEADS_STUDENTS_SUCCESS = "FETCH_LEADS_STUDENTS_SUCCESS";
export const FETCH_LEADS_STUDENTS_FAILURE = "FETCH_LEADS_STUDENTS_FAILURE";

export const EDIT_LEADS_STUDENT_REQUEST = "EDIT_LEADS_STUDENT_REQUEST";
export const EDIT_LEADS_STUDENT_SUCCESS = "EDIT_LEADS_STUDENT_SUCCESS";
export const EDIT_LEADS_STUDENT_FAILURE = "EDIT_LEADS_STUDENT_FAILURE";

export const SET_SELECTED_LEAD = "SET_SELECTED_LEAD";

export const ADD_LEAD_SAVEDPREFRENCES = "ADD_LEAD_SAVEDPREFRENCES";
export const ADD_LEAD_DOCUMENTS = "ADD_LEAD_DOCUMENTS";

export const LEADS_DATA_LOADING = "LEADS_DATA_LOADING";

// Fetch Leads
export const fetchLeadsRequest = (page) => ({
  type: FETCH_LEADS_REQUEST,
  payload: page,
});

export const fetchLeadsSuccess = (data) => ({
  type: FETCH_LEADS_SUCCESS,
  payload: data,
});

export const fetchLeadsFailure = (error) => ({
  type: FETCH_LEADS_FAILURE,
  payload: error,
});

// Fetch Students
export const fetchStudentsRequest = (page) => ({
  type: FETCH_LEADS_STUDENTS_REQUEST,
  payload: page,
});

export const fetchStudentsSuccess = (data) => ({
  type: FETCH_LEADS_STUDENTS_SUCCESS,
  payload: data,
});

export const fetchStudentsFailure = (error) => ({
  type: FETCH_LEADS_STUDENTS_FAILURE,
  payload: error,
});

// Add Lead
export const addLeadRequest = (leadData, alertMsg) => ({
  type: ADD_LEAD_REQUEST,
  payload: { leadData, alertMsg },
});

export const addLeadSuccess = (lead) => ({
  type: ADD_LEAD_SUCCESS,
  payload: lead,
});

export const addLeadFailure = (error) => ({
  type: ADD_LEAD_FAILURE,
  payload: error,
});

// Delete Lead
export const deleteLeadRequest = (leadId) => ({
  type: DELETE_LEAD_REQUEST,
  payload: leadId,
});

export const deleteLeadSuccess = (leadId) => ({
  type: DELETE_LEAD_SUCCESS,
  payload: leadId,
});

export const deleteLeadFailure = (error) => ({
  type: DELETE_LEAD_FAILURE,
  payload: error,
});

// Edit Lead
export const editLeadRequest = (id, leadData) => ({
  type: EDIT_LEAD_REQUEST,
  payload: { id, leadData },
});

export const editLeadSuccess = (editedLead) => ({
  type: EDIT_LEAD_SUCCESS,
  payload: editedLead,
});

export const editLeadFailure = (error) => ({
  type: EDIT_LEAD_FAILURE,
  payload: error,
});

// Edit Student
export const editLeadsStudentRequest = (userId, leadData, leadId) => ({
  type: EDIT_LEADS_STUDENT_REQUEST,
  payload: { userId, leadData, leadId },
});

export const editLeadsStudentSuccess = (editedLead) => ({
  type: EDIT_LEADS_STUDENT_SUCCESS,
  payload: editedLead,
});

export const editLeadsStudentFailure = (error) => ({
  type: EDIT_LEADS_STUDENT_FAILURE,
  payload: error,
});

// Set Selected Lead
export const setSelectedLead = (lead) => ({
  type: SET_SELECTED_LEAD,
  payload: lead,
});

export const addLeadSavedPrefrences = (lead) => {
  return {
    type: ADD_LEAD_SAVEDPREFRENCES,
    payload: lead,
  };
};

export const addLeadDocuments = (lead) => {
  return {
    type: ADD_LEAD_DOCUMENTS,
    payload: lead,
  };
};

export const searchLeadsRequest = (query) => ({
  type: SEARCH_LEADS_REQUEST,
  payload: query,
});

export const searchLeadsSuccess = (results) => ({
  type: SEARCH_LEADS_SUCCESS,
  payload: results,
});

export const searchLeadsFailure = (error) => ({
  type: SEARCH_LEADS_FAILURE,
  payload: error,
});

export const setLeadsDataLoading = (loading) => ({
  type: LEADS_DATA_LOADING,
  payload: loading,
});
