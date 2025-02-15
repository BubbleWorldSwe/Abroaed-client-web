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

    case FETCH_ACCOMMODATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_ACCOMMODATION_REQUEST:
      return { ...state, loading: true };

    case ADD_ACCOMMODATION_SUCCESS:
      return initialState;

    case ADD_ACCOMMODATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_ACCOMMODATION_REQUEST:
      return { ...state, loading: true };

    case DELETE_ACCOMMODATION_SUCCESS:
      return initialState;

    case DELETE_ACCOMMODATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_ACCOMMODATION_REQUEST:
      return { ...state, loading: true };

    case EDIT_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        loading: false,
        accommodations: state.accommodations.map((accommodation) => ({
          ...accommodation,
          data: accommodation.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })),
        selectedAccommodation: action.payload,
      };

    case EDIT_ACCOMMODATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_ACCOMMODATION:
      return { ...state, selectedAccommodation: action.payload };

    default:
      return state;
  }
};
