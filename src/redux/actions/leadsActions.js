export const FETCH_LEADS_REQUEST = "FETCH_LEADS_REQUEST";
export const FETCH_LEADS_SUCCESS = "FETCH_LEADS_SUCCESS";
export const FETCH_LEADS_FAILURE = "FETCH_LEADS_FAILURE";

export const ADD_LEAD_REQUEST = "ADD_LEAD_REQUEST";
export const ADD_LEAD_SUCCESS = "ADD_LEAD_SUCCESS";
export const ADD_LEAD_FAILURE = "ADD_LEAD_FAILURE";

export const DELETE_LEAD_REQUEST = "DELETE_LEAD_REQUEST";
export const DELETE_LEAD_SUCCESS = "DELETE_LEAD_SUCCESS";
export const DELETE_LEAD_FAILURE = "DELETE_LEAD_FAILURE";

export const EDIT_LEAD_REQUEST = "EDIT_LEAD_REQUEST";
export const EDIT_LEAD_SUCCESS = "EDIT_LEAD_SUCCESS";
export const EDIT_LEAD_FAILURE = "EDIT_LEAD_FAILURE";

export const EDIT_STUDENT_REQUEST = "EDIT_STUDENT_REQUEST";
export const EDIT_STUDENT_SUCCESS = "EDIT_STUDENT_SUCCESS";
export const EDIT_STUDENT_FAILURE = "EDIT_STUDENT_FAILURE";

export const SET_SELECTED_LEAD = "SET_SELECTED_LEAD";

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

// Add Lead
export const addLeadRequest = (leadData) => ({
  type: ADD_LEAD_REQUEST,
  payload: leadData,
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
export const editStudentRequest = (id, leadData) => ({
  type: EDIT_STUDENT_REQUEST,
  payload: { id, leadData },
});

export const editStudentSuccess = (editedLead) => ({
  type: EDIT_STUDENT_SUCCESS,
  payload: editedLead,
});

export const editStudentFailure = (error) => ({
  type: EDIT_STUDENT_FAILURE,
  payload: error,
});

// Set Selected Lead
export const setSelectedLead = (lead) => ({
  type: SET_SELECTED_LEAD,
  payload: lead,
});
