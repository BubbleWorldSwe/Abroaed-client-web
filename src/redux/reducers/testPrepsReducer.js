import {
  FETCH_TESTPREPS_REQUEST,
  FETCH_TESTPREPS_SUCCESS,
  FETCH_TESTPREPS_FAILURE,
  ADD_TESTPREP_REQUEST,
  ADD_TESTPREP_SUCCESS,
  ADD_TESTPREP_FAILURE,
  DELETE_TESTPREP_REQUEST,
  DELETE_TESTPREP_SUCCESS,
  DELETE_TESTPREP_FAILURE,
  EDIT_TESTPREP_REQUEST,
  EDIT_TESTPREP_SUCCESS,
  EDIT_TESTPREP_FAILURE,
  SET_SELECTED_TESTPREP,
} from "../actions/testPrepsActions";

const initialState = {
  loading: false,
  testPreps: [],
  error: null,
  totalPages: null,

  page: 1,
  limit: null,
  total: null,

  selectedTestPrep: {},
};

export const testPrepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TESTPREPS_REQUEST:
      return { ...state, loading: true };

    case FETCH_TESTPREPS_SUCCESS:
      return {
        ...state,
        loading: false,

        testPreps:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.testPreps,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case FETCH_TESTPREPS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_TESTPREP_REQUEST:
      return { ...state, loading: true };

    case ADD_TESTPREP_SUCCESS:
      return initialState;

    case ADD_TESTPREP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_TESTPREP_REQUEST:
      return { ...state, loading: true };

    case DELETE_TESTPREP_SUCCESS:
      return initialState;

    case DELETE_TESTPREP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_TESTPREP_REQUEST:
      return { ...state, loading: true };

    case EDIT_TESTPREP_SUCCESS:
      return {
        ...state,
        loading: false,

        testPreps: state.testPreps.map((testPrep) => ({
          ...testPrep,
          data: testPrep.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })),
        selectedTestPrep: action.payload,
      };

    case EDIT_TESTPREP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_TESTPREP:
      return { ...state, selectedTestPrep: action.payload };

    default:
      return state;
  }
};
