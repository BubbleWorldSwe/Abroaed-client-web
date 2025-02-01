import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "../actions/countryActions";

const initialState = {
  loading: false,
  countries: [],
  error: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload.result,
      };

    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
