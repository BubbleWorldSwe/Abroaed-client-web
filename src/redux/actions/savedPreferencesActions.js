export const FETCH_SAVEDPREFERENCES_REQUEST = "FETCH_SAVEDPREFERENCES_REQUEST";
export const FETCH_SAVEDPREFERENCES_SUCCESS = "FETCH_SAVEDPREFERENCES_SUCCESS";
export const FETCH_SAVEDPREFERENCES_FAILURE = "FETCH_SAVEDPREFERENCES_FAILURE";

export const ADD_SAVEDPREFERENCE_REQUEST = "ADD_SAVEDPREFERENCE_REQUEST";
export const ADD_SAVEDPREFERENCE_SUCCESS = "ADD_SAVEDPREFERENCE_SUCCESS";
export const ADD_SAVEDPREFERENCE_FAILURE = "ADD_SAVEDPREFERENCE_FAILURE";

export const DELETE_SAVEDPREFERENCE_REQUEST = "DELETE_SAVEDPREFERENCE_REQUEST";
export const DELETE_SAVEDPREFERENCE_SUCCESS = "DELETE_SAVEDPREFERENCE_SUCCESS";
export const DELETE_SAVEDPREFERENCE_FAILURE = "DELETE_SAVEDPREFERENCE_FAILURE";

export const EDIT_SAVEDPREFERENCE_REQUEST = "EDIT_SAVEDPREFERENCE_REQUEST";
export const EDIT_SAVEDPREFERENCE_SUCCESS = "EDIT_SAVEDPREFERENCE_SUCCESS";
export const EDIT_SAVEDPREFERENCE_FAILURE = "EDIT_SAVEDPREFERENCE_FAILURE";

export const SET_SELECTED_SAVEDPREFERENCE = "SET_SELECTED_SAVEDPREFERENCE";

// Fetch SavedPreferences
export const fetchSavedPreferencesRequest = (studentId) => ({
  type: FETCH_SAVEDPREFERENCES_REQUEST,
  payload: studentId,
});

export const fetchSavedPreferencesSuccess = (data) => ({
  type: FETCH_SAVEDPREFERENCES_SUCCESS,
  payload: data,
});

export const fetchSavedPreferencesFailure = (error) => ({
  type: FETCH_SAVEDPREFERENCES_FAILURE,
  payload: error,
});

// Add SavedPreference
export const addSavedPreferenceRequest = (preferenceData) => ({
  type: ADD_SAVEDPREFERENCE_REQUEST,
  payload: preferenceData,
});

export const addSavedPreferenceSuccess = (preference) => ({
  type: ADD_SAVEDPREFERENCE_SUCCESS,
  payload: preference,
});

export const addSavedPreferenceFailure = (error) => ({
  type: ADD_SAVEDPREFERENCE_FAILURE,
  payload: error,
});

// Delete SavedPreference
export const deleteSavedPreferenceRequest = (preferenceId) => ({
  type: DELETE_SAVEDPREFERENCE_REQUEST,
  payload: preferenceId,
});

export const deleteSavedPreferenceSuccess = (preferenceId) => ({
  type: DELETE_SAVEDPREFERENCE_SUCCESS,
  payload: preferenceId,
});

export const deleteSavedPreferenceFailure = (error) => ({
  type: DELETE_SAVEDPREFERENCE_FAILURE,
  payload: error,
});

// Edit SavedPreference
export const editSavedPreferenceRequest = (id, preferenceData) => ({
  type: EDIT_SAVEDPREFERENCE_REQUEST,
  payload: { id, preferenceData },
});

export const editSavedPreferenceSuccess = (editedPreference) => ({
  type: EDIT_SAVEDPREFERENCE_SUCCESS,
  payload: editedPreference,
});

export const editSavedPreferenceFailure = (error) => ({
  type: EDIT_SAVEDPREFERENCE_FAILURE,
  payload: error,
});

// Set Selected SavedPreference
export const setSelectedSavedPreference = (preference) => ({
  type: SET_SELECTED_SAVEDPREFERENCE,
  payload: preference,
});
