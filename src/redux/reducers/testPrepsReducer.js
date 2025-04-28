import { testPrepsSequence } from "../../constants/values";
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
  FETCH_ALL_TESTPREPS_SUCCESS,
  FETCH_ALL_TESTPREPS_FAILURE,
  FETCH_ALL_TESTPREPS_REQUEST,
  UPLOAD_TESTPREP_IMAGE_REQUEST,
  UPLOAD_TESTPREP_IMAGE_FAILURE,
  UPLOAD_TESTPREP_IMAGE_SUCCESS,
} from "../actions/testPrepsActions";

// ✅ **Persisted Initial State**
const initialState = {
  loading: false,
  testPreps: [],
  allTestPreps: [],
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
    case FETCH_ALL_TESTPREPS_REQUEST:
      return { ...state, loading: true };

    case FETCH_TESTPREPS_SUCCESS:
      return {
        ...state,
        loading: false,
        totalPages: action.payload.totalPages,
        page: action.payload.page,

        testPreps:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.testPreps,
                { index: action.payload.page, data: action.payload.result },
              ],
      };

    case FETCH_ALL_TESTPREPS_SUCCESS:
      const testPreps = action.payload.result;

      const publishedItems = testPreps.filter((item) => {
        console.log(item?.status);
        return item.status === "publish";
      });

      const testPrepMap = new Map(
        publishedItems.map((test) => [test?.exam, test])
      );

      // Arrange destinations based on predefined sequence
      const sortedTestPrep = testPrepsSequence
        .map((name) => testPrepMap.get(name))
        .filter(Boolean); // Remove undefined values (if any country is missing)
      console.log(sortedTestPrep);

      return {
        ...state,
        loading: false,
        allTestPreps: sortedTestPrep,
      };

    case FETCH_TESTPREPS_FAILURE:
    case FETCH_ALL_TESTPREPS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_TESTPREP_REQUEST:
    case DELETE_TESTPREP_REQUEST:
    case EDIT_TESTPREP_REQUEST:
    case UPLOAD_TESTPREP_IMAGE_REQUEST:
      return { ...state, loading: true };

    case ADD_TESTPREP_SUCCESS:
    case DELETE_TESTPREP_SUCCESS:
      return initialState;

    case ADD_TESTPREP_FAILURE:
    case DELETE_TESTPREP_FAILURE:
    case EDIT_TESTPREP_FAILURE:
    case UPLOAD_TESTPREP_IMAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_TESTPREP_SUCCESS:
    case UPLOAD_TESTPREP_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        /* testPreps: state.testPreps.map((testPrep) => ({
          ...testPrep,
          data: testPrep.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })), */
        selectedTestPrep: action.payload,

        testPreps: [],
        allTestPreps: [],
        error: null,
        totalPages: null,
        page: 1,
        limit: null,
        total: null,
      };

    case SET_SELECTED_TESTPREP:
      return { ...state, selectedTestPrep: action.payload };

    default:
      return state;
  }
};
