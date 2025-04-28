import { destinationSequence } from "../../constants/values";
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
  FETCH_ALL_DESTINATIONS_FAILURE,
  FETCH_ALL_DESTINATIONS_REQUEST,
  FETCH_ALL_DESTINATIONS_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
  SET_SELECTED_DESTINATION,
  UPLOAD_DESTINATION_IMAGE_FAILURE,
  UPLOAD_DESTINATION_IMAGE_REQUEST,
  UPLOAD_DESTINATION_IMAGE_SUCCESS,
} from "../actions/destinationActions";

const initialState = {
  loading: false,
  destinations: [],
  error: null,
  totalPages: null,
  allDestinations: [],
  page: 1,
  limit: null,
  total: null,
  selectedDestination: {},
};

export const destnationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESTINATIONS_REQUEST:
    case FETCH_ALL_DESTINATIONS_REQUEST:
    case ADD_DESTINATION_REQUEST:
    case DELETE_DESTINATION_REQUEST:
    case EDIT_DESTINATION_REQUEST:
    case UPLOAD_DESTINATION_IMAGE_REQUEST:
      return { ...state, loading: true };

    case FETCH_DESTINATIONS_SUCCESS:
      return {
        ...state,
        loading: false,

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

    case FETCH_ALL_DESTINATIONS_SUCCESS:
      const destinations = action.payload.result;

      const publishedItems = destinations.filter((item) => {
        console.log(item?.status);
        return item.status === "complete";
      });

      // Create a lookup for quick access
      const destinationMap = new Map(
        publishedItems.map((dest) => [dest?.countryId?.name, dest])
      );

      // Arrange destinations based on predefined sequence
      const sortedDestinations = destinationSequence
        .map((name) => destinationMap.get(name))
        .filter(Boolean); // Remove undefined values (if any country is missing)

      return {
        ...state,
        loading: false,
        allDestinations: sortedDestinations,
      };

    case EDIT_DESTINATION_SUCCESS:
    case UPLOAD_DESTINATION_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,

        /*  destinations: state.destinations.map((destination) => ({
          ...destination,
          data: destination.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })), */
        selectedDestination: action.payload,

        destinations: [],
        error: null,
        totalPages: null,
        allDestinations: [],
        page: 1,
        limit: null,
        total: null,
      };

    case ADD_DESTINATION_SUCCESS:
    case DELETE_DESTINATION_SUCCESS:
      return initialState;

    case FETCH_DESTINATIONS_FAILURE:
    case FETCH_ALL_DESTINATIONS_FAILURE:
    case DELETE_DESTINATION_FAILURE:
    case ADD_DESTINATION_FAILURE:
    case EDIT_DESTINATION_FAILURE:
    case UPLOAD_DESTINATION_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_SELECTED_DESTINATION:
      return { ...state, selectedDestination: action.payload };

    /*  case LOGOUT:
      return initialState; */

    default:
      return state;
  }
};
