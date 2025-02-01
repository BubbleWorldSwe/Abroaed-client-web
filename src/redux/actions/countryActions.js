// Action Types
export const FETCH_COUNTRIES_REQUEST = "FETCH_COUNTRIES_REQUEST";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";

// Action Creators
export const fetchCountriesRequest = (searchTerm = "") => ({
  type: FETCH_COUNTRIES_REQUEST,
  payload: searchTerm,
});

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});
