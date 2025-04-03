import {
  FETCH_SAVEDPREFERENCES_REQUEST,
  FETCH_SAVEDPREFERENCES_SUCCESS,
  FETCH_SAVEDPREFERENCES_FAILURE,
  EDIT_SAVEDPREFERENCE_REQUEST,
  EDIT_SAVEDPREFERENCE_SUCCESS,
  EDIT_SAVEDPREFERENCE_FAILURE,
} from "../actions/savedPreferencesActions";

// Helper function to check if an object exists in a Set
const hasPreference = (set, preference) => {
  for (let item of set) {
    if (JSON.stringify(item) === JSON.stringify(preference)) {
      return true;
    }
  }
  return false;
};

const initialState = {
  loading: false,
  savedPreferences: new Set(),
  error: null,
  selectedPreference: {},
};

export const savedPreferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAVEDPREFERENCES_REQUEST:
    case EDIT_SAVEDPREFERENCE_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_SAVEDPREFERENCES_SUCCESS: {
      const newPreferences = new Set(state.savedPreferences);
      action.payload.result.forEach((preference) => {
        if (!hasPreference(newPreferences, preference)) {
          newPreferences.add(preference);
        }
      });
      return {
        ...state,
        loading: false,
        savedPreferences: newPreferences,
      };
    }

    case FETCH_SAVEDPREFERENCES_FAILURE:
    case EDIT_SAVEDPREFERENCE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_SAVEDPREFERENCE_SUCCESS: {
      const updatedPreferences = new Set(state.savedPreferences);
      updatedPreferences.forEach((item) => {
        if (item.id === action.payload.id) {
          updatedPreferences.delete(item);
        }
      });
      updatedPreferences.add(action.payload);
      return {
        ...state,
        loading: false,
        savedPreferences: updatedPreferences,
      };
    }

    default:
      return state;
  }
};
