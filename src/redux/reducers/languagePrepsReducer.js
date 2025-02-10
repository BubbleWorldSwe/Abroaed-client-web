import {
  FETCH_LANGUAGEPREPS_REQUEST,
  FETCH_LANGUAGEPREPS_SUCCESS,
  FETCH_LANGUAGEPREPS_FAILURE,
  ADD_LANGUAGEPREP_REQUEST,
  ADD_LANGUAGEPREP_SUCCESS,
  ADD_LANGUAGEPREP_FAILURE,
  DELETE_LANGUAGEPREP_REQUEST,
  DELETE_LANGUAGEPREP_SUCCESS,
  DELETE_LANGUAGEPREP_FAILURE,
  EDIT_LANGUAGEPREP_REQUEST,
  EDIT_LANGUAGEPREP_SUCCESS,
  EDIT_LANGUAGEPREP_FAILURE,
  SET_SELECTED_LANGUAGEPREP,
} from "../actions/languagePrepsActions";

const initialState = {
  loading: false,
  languagePreps: [],
  error: null,
  totalPages: null,

  page: 1,
  limit: null,
  total: null,

  selectedLanguagePrep: {},
};

export const languagePrepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANGUAGEPREPS_REQUEST:
      return { ...state, loading: true };

    case FETCH_LANGUAGEPREPS_SUCCESS:
      return {
        ...state,
        loading: false,
        languagePreps:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.languagePreps,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case FETCH_LANGUAGEPREPS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_LANGUAGEPREP_REQUEST:
      return { ...state, loading: true };

    case ADD_LANGUAGEPREP_SUCCESS:
      return initialState;

    case ADD_LANGUAGEPREP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_LANGUAGEPREP_REQUEST:
      return { ...state, loading: true };

    case DELETE_LANGUAGEPREP_SUCCESS:
      return initialState;

    case DELETE_LANGUAGEPREP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_LANGUAGEPREP_REQUEST:
      return { ...state, loading: true };

    case EDIT_LANGUAGEPREP_SUCCESS:
      return {
        ...state,
        loading: false,
        languagePreps: state.languagePreps.map((languagePrep) => ({
          ...languagePrep,
          data: languagePrep.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })),
        selectedLanguagePrep: action.payload,
      };

    case EDIT_LANGUAGEPREP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_LANGUAGEPREP:
      return { ...state, selectedLanguagePrep: action.payload };

    default:
      return state;
  }
};
