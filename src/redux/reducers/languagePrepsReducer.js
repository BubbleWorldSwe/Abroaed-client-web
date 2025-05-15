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
  FETCH_ALL_LANGUAGEPREPS_REQUEST,
  FETCH_ALL_LANGUAGEPREPS_FAILURE,
  FETCH_ALL_LANGUAGEPREPS_SUCCESS,
  UPLOAD_LANGUAGEPREP_IMAGE_REQUEST,
  UPLOAD_LANGUAGEPREP_IMAGE_FAILURE,
  UPLOAD_LANGUAGEPREP_IMAGE_SUCCESS,
} from "../actions/languagePrepsActions";

const initialState = {
  loading: false,
  languagePreps: [],
  allLanguagePreps: [],
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
    case FETCH_ALL_LANGUAGEPREPS_REQUEST:
    case ADD_LANGUAGEPREP_REQUEST:
    case DELETE_LANGUAGEPREP_REQUEST:
    case EDIT_LANGUAGEPREP_REQUEST:
    case UPLOAD_LANGUAGEPREP_IMAGE_REQUEST:
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

    case FETCH_ALL_LANGUAGEPREPS_SUCCESS:
      const preps = action.payload.result;

      const publishedItems = preps.filter((item) => {
        console.log(item?.status);
        return item.status === "publish";
      });
      return {
        ...state,
        loading: false,
        allLanguagePreps: publishedItems,
      };

    case EDIT_LANGUAGEPREP_SUCCESS:
    case UPLOAD_LANGUAGEPREP_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        /*   languagePreps: state.languagePreps.map((languagePrep) => ({
          ...languagePrep,
          data: languagePrep.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })), */
        selectedLanguagePrep: action.payload,

        languagePreps: [],
        allLanguagePreps: [],
        error: null,
        totalPages: null,

        page: 1,
        limit: null,
        total: null,
      };

    case DELETE_LANGUAGEPREP_SUCCESS:
    case ADD_LANGUAGEPREP_SUCCESS:
      return initialState;

    case FETCH_LANGUAGEPREPS_FAILURE:
    case FETCH_ALL_LANGUAGEPREPS_FAILURE:
    case ADD_LANGUAGEPREP_FAILURE:
    case DELETE_LANGUAGEPREP_FAILURE:
    case EDIT_LANGUAGEPREP_FAILURE:
    case UPLOAD_LANGUAGEPREP_IMAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_LANGUAGEPREP:
      return { ...state, selectedLanguagePrep: action.payload, loading: false };

    default:
      return state;
  }
};
