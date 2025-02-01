export const FETCH_DESTINATIONS_REQUEST = "FETCH_DESTINATIONS_REQUEST";
export const FETCH_DESTINATIONS_SUCCESS = "FETCH_DESTINATIONS_SUCCESS";
export const FETCH_DESTINATIONS_FAILURE = "FETCH_DESTINATIONS_FAILURE";

// Action Types
export const ADD_DESTINATION_REQUEST = "ADD_DESTINATION_REQUEST";
export const ADD_DESTINATION_SUCCESS = "ADD_DESTINATION_SUCCESS";
export const ADD_DESTINATION_FAILURE = "ADD_DESTINATION_FAILURE";

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
