import {
  FETCH_SAVEDPREFERENCES_REQUEST,
  FETCH_SAVEDPREFERENCES_SUCCESS,
  FETCH_SAVEDPREFERENCES_FAILURE,
  EDIT_SAVEDPREFERENCE_REQUEST,
  EDIT_SAVEDPREFERENCE_SUCCESS,
  EDIT_SAVEDPREFERENCE_FAILURE,
} from "../actions/savedPreferencesActions";

const initialState = {
  loading: false,
  savedPreferences: [],
  error: null,
  selectedPreference: {},
};

export const savedPreferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAVEDPREFERENCES_REQUEST:
    case EDIT_SAVEDPREFERENCE_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_SAVEDPREFERENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        savedPreferences: action.payload.result,
      };

    case FETCH_SAVEDPREFERENCES_FAILURE:
    case EDIT_SAVEDPREFERENCE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_SAVEDPREFERENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        savedPreferences: action.payload,
      };

    default:
      return state;
  }
};
