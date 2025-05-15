import {
  FETCH_ACCOMMODATIONS_REQUEST,
  FETCH_ACCOMMODATIONS_SUCCESS,
  FETCH_ACCOMMODATIONS_FAILURE,
  ADD_ACCOMMODATION_REQUEST,
  ADD_ACCOMMODATION_SUCCESS,
  ADD_ACCOMMODATION_FAILURE,
  DELETE_ACCOMMODATION_REQUEST,
  DELETE_ACCOMMODATION_SUCCESS,
  DELETE_ACCOMMODATION_FAILURE,
  EDIT_ACCOMMODATION_REQUEST,
  EDIT_ACCOMMODATION_SUCCESS,
  EDIT_ACCOMMODATION_FAILURE,
  SET_SELECTED_ACCOMMODATION,
  UPLOAD_ACCOMMODATION_IMAGE_REQUEST,
  UPLOAD_ACCOMMODATION_IMAGE_FAILURE,
  UPLOAD_ACCOMMODATION_IMAGE_SUCCESS,
} from "../actions/accommodationActions";

const initialState = {
  loading: false,
  accommodations: [],
  error: null,
  totalPages: null,

  page: 1,
  limit: null,
  total: null,

  selectedAccommodation: {},
};

export const accommodationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATIONS_REQUEST:
    case ADD_ACCOMMODATION_REQUEST:
    case DELETE_ACCOMMODATION_REQUEST:
    case EDIT_ACCOMMODATION_REQUEST:
    case UPLOAD_ACCOMMODATION_IMAGE_REQUEST:
      return { ...state, loading: true };

    case FETCH_ACCOMMODATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        accommodations:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.accommodations,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case ADD_ACCOMMODATION_SUCCESS:
      return initialState;

    case DELETE_ACCOMMODATION_SUCCESS:
      return initialState;

    case EDIT_ACCOMMODATION_SUCCESS:
    case UPLOAD_ACCOMMODATION_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        /*   accommodations: state.accommodations.map((accommodation) => ({
          ...accommodation,
          data: accommodation.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })), */

        selectedAccommodation: action.payload,
        accommodations: [],
        error: null,
        totalPages: null,

        page: 1,
        limit: null,
        total: null,
      };

    case FETCH_ACCOMMODATIONS_FAILURE:
    case ADD_ACCOMMODATION_FAILURE:
    case DELETE_ACCOMMODATION_FAILURE:
    case EDIT_ACCOMMODATION_FAILURE:
    case UPLOAD_ACCOMMODATION_IMAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_ACCOMMODATION:
      return {
        ...state,
        selectedAccommodation: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
