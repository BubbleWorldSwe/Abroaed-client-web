// Student Profile
export const FETCH_STUDENT_PROFILE_REQUEST = "FETCH_STUDENT_PROFILE_REQUEST";
export const FETCH_STUDENT_PROFILE_SUCCESS = "FETCH_STUDENT_PROFILE_SUCCESS";
export const FETCH_STUDENT_PROFILE_FAILURE = "FETCH_STUDENT_PROFILE_FAILURE";

export const EDIT_STUDENT_PROFILE_REQUEST = "EDIT_STUDENT_PROFILE_REQUEST";
export const EDIT_STUDENT_PROFILE_SUCCESS = "EDIT_STUDENT_PROFILE_SUCCESS";
export const EDIT_STUDENT_PROFILE_FAILURE = "EDIT_STUDENT_PROFILE_FAILURE";

// Student Application
export const STUDENT_APPLICATION_REQUEST = "STUDENT_APPLICATION_REQUEST";
export const STUDENT_APPLICATION_SUCCESS = "STUDENT_APPLICATION_SUCCESS";
export const STUDENT_APPLICATION_FAILURE = "STUDENT_APPLICATION_FAILURE";

// Student Transactions
export const STUDENT_TRANSACTIONS_REQUEST = "STUDENT_TRANSACTIONS_REQUEST";
export const STUDENT_TRANSACTIONS_SUCCESS = "STUDENT_TRANSACTIONS_SUCCESS";
export const STUDENT_TRANSACTIONS_FAILURE = "STUDENT_TRANSACTIONS_FAILURE";

// Student Saved Preferences
export const STUDENT_SAVEDPREFERENCES_REQUEST =
  "STUDENT_SAVEDPREFERENCES_REQUEST";
export const STUDENT_SAVEDPREFERENCES_SUCCESS =
  "STUDENT_SAVEDPREFERENCES_SUCCESS";
export const STUDENT_SAVEDPREFERENCES_FAILURE =
  "STUDENT_SAVEDPREFERENCES_FAILURE";

// Student Prep Batches
export const STUDENT_PREPS_BATCHES_REQUEST = "STUDENT_PREPS_BATCHES_REQUEST";
export const STUDENT_PREPS_BATCHES_SUCCESS = "STUDENT_PREPS_BATCHES_SUCCESS";
export const STUDENT_PREPS_BATCHES_FAILURE = "STUDENT_PREPS_BATCHES_FAILURE";

// Student Documents
export const STUDENT_DOCUMENTS_REQUEST = "STUDENT_DOCUMENTS_REQUEST";
export const STUDENT_DOCUMENTS_SUCCESS = "STUDENT_DOCUMENTS_SUCCESS";
export const STUDENT_DOCUMENTS_FAILURE = "STUDENT_DOCUMENTS_FAILURE";

export const UPLOAD_STUDENT_DOCUMENT_REQUEST =
  "UPLOAD_STUDENT_DOCUMENT_REQUEST";
export const UPLOAD_STUDENT_DOCUMENT_SUCCESS =
  "UPLOAD_STUDENT_DOCUMENT_SUCCESS";
export const UPLOAD_STUDENT_DOCUMENT_FAILURE =
  "UPLOAD_STUDENT_DOCUMENT_FAILURE";

// Action Creators

// Fetch Student Profile
export const fetchStudentProfileRequest = (userId) => ({
  type: FETCH_STUDENT_PROFILE_REQUEST,
  payload: userId,
});

export const fetchStudentProfileSuccess = (data) => ({
  type: FETCH_STUDENT_PROFILE_SUCCESS,
  payload: data,
});

export const fetchStudentProfileFailure = (error) => ({
  type: FETCH_STUDENT_PROFILE_FAILURE,
  payload: error,
});

// Edit Student Profile
export const editStudentProfileRequest = (userId, profileData, id) => ({
  type: EDIT_STUDENT_PROFILE_REQUEST,
  payload: { userId, profileData, id },
});

export const editStudentProfileSuccess = (data) => ({
  type: EDIT_STUDENT_PROFILE_SUCCESS,
  payload: data,
});

export const editStudentProfileFailure = (error) => ({
  type: EDIT_STUDENT_PROFILE_FAILURE,
  payload: error,
});

// Applications
export const fetchStudentApplicationRequest = (id) => ({
  type: STUDENT_APPLICATION_REQUEST,
  payload: id,
});

export const fetchStudentApplicationSuccess = (data) => ({
  type: STUDENT_APPLICATION_SUCCESS,
  payload: data,
});

export const fetchStudentApplicationFailure = (error) => ({
  type: STUDENT_APPLICATION_FAILURE,
  payload: error,
});

// Transactions
export const fetchStudentTransactionsRequest = (id) => ({
  type: STUDENT_TRANSACTIONS_REQUEST,
  payload: id,
});

export const fetchStudentTransactionsSuccess = (data) => ({
  type: STUDENT_TRANSACTIONS_SUCCESS,
  payload: data,
});

export const fetchStudentTransactionsFailure = (error) => ({
  type: STUDENT_TRANSACTIONS_FAILURE,
  payload: error,
});

// Saved Preferences
export const fetchStudentSavedPreferencesRequest = (id) => ({
  type: STUDENT_SAVEDPREFERENCES_REQUEST,
  payload: id,
});

export const fetchStudentSavedPreferencesSuccess = (data) => ({
  type: STUDENT_SAVEDPREFERENCES_SUCCESS,
  payload: data,
});

export const fetchStudentSavedPreferencesFailure = (error) => ({
  type: STUDENT_SAVEDPREFERENCES_FAILURE,
  payload: error,
});

// Preps Batches
export const fetchStudentPrepsBatchesRequest = (id) => ({
  type: STUDENT_PREPS_BATCHES_REQUEST,
  payload: id,
});

export const fetchStudentPrepsBatchesSuccess = (data) => ({
  type: STUDENT_PREPS_BATCHES_SUCCESS,
  payload: data,
});

export const fetchStudentPrepsBatchesFailure = (error) => ({
  type: STUDENT_PREPS_BATCHES_FAILURE,
  payload: error,
});

// Fetch Documents
export const fetchStudentDocumentsRequest = (id) => ({
  type: STUDENT_DOCUMENTS_REQUEST,
  payload: id,
});

export const fetchStudentDocumentsSuccess = (data) => ({
  type: STUDENT_DOCUMENTS_SUCCESS,
  payload: data,
});

export const fetchStudentDocumentsFailure = (error) => ({
  type: STUDENT_DOCUMENTS_FAILURE,
  payload: error,
});

// upload doc

export const uploadStudentDocumentRequest = (id, documentData) => ({
  type: UPLOAD_STUDENT_DOCUMENT_REQUEST,
  payload: { id, documentData },
});

export const uploadStudentDocumentSuccess = (data) => ({
  type: UPLOAD_STUDENT_DOCUMENT_SUCCESS,
  payload: data,
});

export const uploadStudentDocumentFailure = (error) => ({
  type: UPLOAD_STUDENT_DOCUMENT_FAILURE,
  payload: error,
});
