import { LOGOUT } from "../actions/authActions";
import {
  ADD_DESTINATION_FAILURE,
  ADD_DESTINATION_REQUEST,
  ADD_DESTINATION_SUCCESS,
  DELETE_DESTINATION_FAILURE,
  DELETE_DESTINATION_REQUEST,
  DELETE_DESTINATION_SUCCESS,
  EDIT_DESTINATION_FAILURE,
  EDIT_DESTINATION_REQUEST,
  EDIT_DESTINATION_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
  SET_SELECTED_COUNTRY,
} from "../actions/destinationActions";

const initialState = {
  loading: false,
  destinations: [],
  error: null,
  totalPages: null,
  page: null,
  page: 1,
  limit: null,
  total: null,
  selectedCountry: {},
};

export const destnationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESTINATIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_DESTINATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        // destinations: [...state.destinations, ...action.payload.result],

        destinations:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.destinations,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };
    case FETCH_DESTINATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_DESTINATION_REQUEST:
      return { ...state, loading: true };

    case ADD_DESTINATION_SUCCESS:
      return initialState;

    case ADD_DESTINATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_DESTINATION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_DESTINATION_SUCCESS:
      return initialState;

    case DELETE_DESTINATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDIT_DESTINATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_DESTINATION_SUCCESS:
      return {
        ...state,
        loading: false,

        destinations: state.destinations.map((destination) => ({
          ...destination,
          data: destination.data.map((item) =>
            item._id === action.payload.data._id
              ? { ...item, ...action.payload.data }
              : item
          ),
        })),
        // selectedCountry: action.payload.data,
      };
    case EDIT_DESTINATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_SELECTED_COUNTRY:
      return { ...state, selectedCountry: action.payload };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
