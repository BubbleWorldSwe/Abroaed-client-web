import {
  FETCH_COLLEGES_REQUEST,
  FETCH_COLLEGES_SUCCESS,
  FETCH_COLLEGES_FAILURE,
  ADD_COLLEGE_REQUEST,
  ADD_COLLEGE_SUCCESS,
  ADD_COLLEGE_FAILURE,
  DELETE_COLLEGE_REQUEST,
  DELETE_COLLEGE_SUCCESS,
  DELETE_COLLEGE_FAILURE,
  EDIT_COLLEGE_REQUEST,
  EDIT_COLLEGE_SUCCESS,
  EDIT_COLLEGE_FAILURE,
  SET_SELECTED_COLLEGE,
} from "../actions/collegeActions";

const initialState = {
  loading: false,
  colleges: [],
  error: null,
  totalPages: null,
  page: 1,
  limit: null,
  total: null,
  selectedCollege: {},
};

export const collegesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLEGES_REQUEST:
      return { ...state, loading: true };

    case FETCH_COLLEGES_SUCCESS:
      return {
        ...state,
        loading: false,
        colleges:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.colleges,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case FETCH_COLLEGES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_COLLEGE_REQUEST:
      return { ...state, loading: true };

    case ADD_COLLEGE_SUCCESS:
      return initialState;

    case ADD_COLLEGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_COLLEGE_REQUEST:
      return { ...state, loading: true };

    case DELETE_COLLEGE_SUCCESS:
      return initialState;

    case DELETE_COLLEGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_COLLEGE_REQUEST:
      return { ...state, loading: true };

    case EDIT_COLLEGE_SUCCESS:
      return {
        ...state,
        loading: false,
        colleges: state.colleges.map((college) => ({
          ...college,
          data: college.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })),
        selectedCollege: action.payload,
      };

    case EDIT_COLLEGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_COLLEGE:
      return { ...state, selectedCollege: action.payload };

    default:
      return state;
  }
};
