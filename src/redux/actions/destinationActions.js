export const FETCH_DESTINATIONS_REQUEST = "FETCH_DESTINATIONS_REQUEST";
export const FETCH_DESTINATIONS_SUCCESS = "FETCH_DESTINATIONS_SUCCESS";
export const FETCH_DESTINATIONS_FAILURE = "FETCH_DESTINATIONS_FAILURE";

export const FETCH_ALL_DESTINATIONS_REQUEST = "FETCH_ALL_DESTINATIONS_REQUEST";
export const FETCH_ALL_DESTINATIONS_SUCCESS = "FETCH_ALL_DESTINATIONS_SUCCESS";
export const FETCH_ALL_DESTINATIONS_FAILURE = "FETCH_ALL_DESTINATIONS_FAILURE";

export const ADD_DESTINATION_REQUEST = "ADD_DESTINATION_REQUEST";
export const ADD_DESTINATION_SUCCESS = "ADD_DESTINATION_SUCCESS";
export const ADD_DESTINATION_FAILURE = "ADD_DESTINATION_FAILURE";

export const DELETE_DESTINATION_REQUEST = "DELETE_DESTINATION_REQUEST";
export const DELETE_DESTINATION_SUCCESS = "DELETE_DESTINATION_SUCCESS";
export const DELETE_DESTINATION_FAILURE = "DELETE_DESTINATION_FAILURE";

export const EDIT_DESTINATION_REQUEST = "EDIT_DESTINATION_REQUEST";
export const EDIT_DESTINATION_SUCCESS = "EDIT_DESTINATION_SUCCESS";
export const EDIT_DESTINATION_FAILURE = "EDIT_DESTINATION_FAILURE";

export const SET_SELECTED_DESTINATION = "SET_SELECTED_DESTINATION";

export const fetchDestinationsRequest = (page) => ({
  type: FETCH_DESTINATIONS_REQUEST,
  payload: page,
});

export const fetchDestinationsSuccess = (data) => ({
  type: FETCH_DESTINATIONS_SUCCESS,
  payload: data,
});

export const fetchDestinationsFailure = (error) => ({
  type: FETCH_DESTINATIONS_FAILURE,
  payload: error,
});

export const fetchAllDestinationsRequest = () => ({
  type: FETCH_ALL_DESTINATIONS_REQUEST,
});

export const fetchAllDestinationsSuccess = (data) => ({
  type: FETCH_ALL_DESTINATIONS_SUCCESS,
  payload: data,
});

export const fetchAllDestinationsFailure = (error) => ({
  type: FETCH_ALL_DESTINATIONS_FAILURE,
  payload: error,
});

export const addDestinationRequest = (destinationData) => ({
  type: ADD_DESTINATION_REQUEST,
  payload: destinationData,
});

export const addDestinationSuccess = (destination) => ({
  type: ADD_DESTINATION_SUCCESS,
  payload: destination,
});

export const addDestinationFailure = (error) => ({
  type: ADD_DESTINATION_FAILURE,
  payload: error,
});

export const deleteDestinationRequest = (destinationId) => ({
  type: DELETE_DESTINATION_REQUEST,
  payload: destinationId,
});

export const deleteDestinationSuccess = (destinationId) => ({
  type: DELETE_DESTINATION_SUCCESS,
  payload: destinationId,
});

export const deleteDestinationFailure = (error) => ({
  type: DELETE_DESTINATION_FAILURE,
  payload: error,
});

// Edit destination actions
export const editDestinationRequest = (id, destinationData) => ({
  type: EDIT_DESTINATION_REQUEST,
  payload: { id, destinationData },
});

export const editDestinationSuccess = (editedDestination) => ({
  type: EDIT_DESTINATION_SUCCESS,
  payload: editedDestination,
});

export const editDestinationFailure = (error) => ({
  type: EDIT_DESTINATION_FAILURE,
  payload: error,
});

export const setSelectedDestination = (country) => ({
  type: SET_SELECTED_DESTINATION,
  payload: country,
});
