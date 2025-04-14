// Action Types for Accommodation
export const FETCH_ACCOMMODATIONS_REQUEST = "FETCH_ACCOMMODATIONS_REQUEST";
export const FETCH_ACCOMMODATIONS_SUCCESS = "FETCH_ACCOMMODATIONS_SUCCESS";
export const FETCH_ACCOMMODATIONS_FAILURE = "FETCH_ACCOMMODATIONS_FAILURE";

export const ADD_ACCOMMODATION_REQUEST = "ADD_ACCOMMODATION_REQUEST";
export const ADD_ACCOMMODATION_SUCCESS = "ADD_ACCOMMODATION_SUCCESS";
export const ADD_ACCOMMODATION_FAILURE = "ADD_ACCOMMODATION_FAILURE";

export const DELETE_ACCOMMODATION_REQUEST = "DELETE_ACCOMMODATION_REQUEST";
export const DELETE_ACCOMMODATION_SUCCESS = "DELETE_ACCOMMODATION_SUCCESS";
export const DELETE_ACCOMMODATION_FAILURE = "DELETE_ACCOMMODATION_FAILURE";

export const EDIT_ACCOMMODATION_REQUEST = "EDIT_ACCOMMODATION_REQUEST";
export const EDIT_ACCOMMODATION_SUCCESS = "EDIT_ACCOMMODATION_SUCCESS";
export const EDIT_ACCOMMODATION_FAILURE = "EDIT_ACCOMMODATION_FAILURE";

export const UPLOAD_ACCOMMODATION_IMAGE_REQUEST =
  "UPLOAD_ACCOMMODATION_IMAGE_REQUEST";
export const UPLOAD_ACCOMMODATION_IMAGE_SUCCESS =
  "UPLOAD_ACCOMMODATION_IMAGE_SUCCESS";
export const UPLOAD_ACCOMMODATION_IMAGE_FAILURE =
  "UPLOAD_ACCOMMODATION_IMAGE_FAILURE";

export const SET_SELECTED_ACCOMMODATION = "SET_SELECTED_ACCOMMODATION";

// Fetch Accommodations Actions
export const fetchAccommodationsRequest = (page) => ({
  type: FETCH_ACCOMMODATIONS_REQUEST,
  payload: page,
});

export const fetchAccommodationsSuccess = (data) => ({
  type: FETCH_ACCOMMODATIONS_SUCCESS,
  payload: data,
});

export const fetchAccommodationsFailure = (error) => ({
  type: FETCH_ACCOMMODATIONS_FAILURE,
  payload: error,
});

// Add Accommodation Actions
export const addAccommodationRequest = (accommodationData) => ({
  type: ADD_ACCOMMODATION_REQUEST,
  payload: accommodationData,
});

export const addAccommodationSuccess = (accommodation) => ({
  type: ADD_ACCOMMODATION_SUCCESS,
  payload: accommodation,
});

export const addAccommodationFailure = (error) => ({
  type: ADD_ACCOMMODATION_FAILURE,
  payload: error,
});

// Delete Accommodation Actions
export const deleteAccommodationRequest = (accommodationId) => ({
  type: DELETE_ACCOMMODATION_REQUEST,
  payload: accommodationId,
});

export const deleteAccommodationSuccess = (accommodationId) => ({
  type: DELETE_ACCOMMODATION_SUCCESS,
  payload: accommodationId,
});

export const deleteAccommodationFailure = (error) => ({
  type: DELETE_ACCOMMODATION_FAILURE,
  payload: error,
});

// Edit Accommodation Actions
export const editAccommodationRequest = (id, accommodationData) => ({
  type: EDIT_ACCOMMODATION_REQUEST,
  payload: { id, accommodationData },
});

export const editAccommodationSuccess = (editedAccommodation) => ({
  type: EDIT_ACCOMMODATION_SUCCESS,
  payload: editedAccommodation,
});

export const editAccommodationFailure = (error) => ({
  type: EDIT_ACCOMMODATION_FAILURE,
  payload: error,
});

// Set Selected Accommodation
export const setSelectedAccommodation = (accommodation) => ({
  type: SET_SELECTED_ACCOMMODATION,
  payload: accommodation,
});

export const uploadAccommodationImageRequest = (id, imageData) => ({
  type: UPLOAD_ACCOMMODATION_IMAGE_REQUEST,
  payload: { id, imageData },
});

export const uploadAccommodationImageSuccess = (data) => ({
  type: UPLOAD_ACCOMMODATION_IMAGE_SUCCESS,
  payload: data,
});

export const uploadAccommodationImageFailure = (error) => ({
  type: UPLOAD_ACCOMMODATION_IMAGE_FAILURE,
  payload: error,
});
