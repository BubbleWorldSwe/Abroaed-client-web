import {
  FETCH_SAVEDPREFERENCES_REQUEST,
  FETCH_SAVEDPREFERENCES_SUCCESS,
  FETCH_SAVEDPREFERENCES_FAILURE,
  ADD_SAVEDPREFERENCE_REQUEST,
  ADD_SAVEDPREFERENCE_SUCCESS,
  ADD_SAVEDPREFERENCE_FAILURE,
  DELETE_SAVEDPREFERENCE_REQUEST,
  DELETE_SAVEDPREFERENCE_SUCCESS,
  DELETE_SAVEDPREFERENCE_FAILURE,
} from "../actions/savedPreferencesActions";

const initialState = {
  loading: false,
  savedPreferences: new Set(),
  error: null,
};

export const savedPreferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAVEDPREFERENCES_REQUEST:
    case ADD_SAVEDPREFERENCE_REQUEST:
    case DELETE_SAVEDPREFERENCE_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_SAVEDPREFERENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        savedPreferences: new Set(action.payload.result), // Convert array to Set
      };

    case FETCH_SAVEDPREFERENCES_FAILURE:
    case ADD_SAVEDPREFERENCE_FAILURE:
    case DELETE_SAVEDPREFERENCE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_SAVEDPREFERENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        savedPreferences: new Set([...state.savedPreferences, action.payload]), // Add new item immutably
      };

    case DELETE_SAVEDPREFERENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        savedPreferences: new Set(
          [...state.savedPreferences].filter(
            (preference) => preference._id !== action.payload
          )
        ), // Remove item immutably
      };

    default:
      return state;
  }
};
