import { LOGOUT } from "../actions/authActions";
import {
  ADD_DESTINATION_FAILURE,
  ADD_DESTINATION_REQUEST,
  ADD_DESTINATION_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
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

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
