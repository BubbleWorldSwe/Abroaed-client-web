import {
  FETCH_STUDENT_PROFILE_REQUEST,
  FETCH_STUDENT_PROFILE_SUCCESS,
  FETCH_STUDENT_PROFILE_FAILURE,
  STUDENT_APPLICATION_REQUEST,
  STUDENT_APPLICATION_SUCCESS,
  STUDENT_APPLICATION_FAILURE,
  STUDENT_TRANSACTIONS_REQUEST,
  STUDENT_TRANSACTIONS_SUCCESS,
  STUDENT_TRANSACTIONS_FAILURE,
  STUDENT_SAVEDPREFERENCES_REQUEST,
  STUDENT_SAVEDPREFERENCES_SUCCESS,
  STUDENT_SAVEDPREFERENCES_FAILURE,
  STUDENT_PREPS_BATCHES_REQUEST,
  STUDENT_PREPS_BATCHES_SUCCESS,
  STUDENT_PREPS_BATCHES_FAILURE,
  EDIT_STUDENT_PROFILE_REQUEST,
  EDIT_STUDENT_PROFILE_SUCCESS,
  EDIT_STUDENT_PROFILE_FAILURE,
} from "../actions/studentProfileActions";

const initialState = {
  loading: false,
  error: null,
  studentProfile: null, // changed from "profile"
  applications: [],
  transactions: [],
  savedPreferences: [],
  prepsBatches: [],
  studentId: null,
  leadId: null,
};

export default function studentProfileReducer(state = initialState, action) {
  switch (action.type) {
    // Student Profile
    case FETCH_STUDENT_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_STUDENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentProfile: action.payload,
        studentId: action.payload?.user?._id,
        leadId: action.payload?._id,
      };
    case FETCH_STUDENT_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Edit Student Profile
    case EDIT_STUDENT_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case EDIT_STUDENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentProfile: action.payload,
      };
    case EDIT_STUDENT_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Applications
    case STUDENT_APPLICATION_REQUEST:
      return { ...state, loading: true, error: null };
    case STUDENT_APPLICATION_SUCCESS:
      return { ...state, loading: false, applications: action.payload };
    case STUDENT_APPLICATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Transactions
    case STUDENT_TRANSACTIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case STUDENT_TRANSACTIONS_SUCCESS:
      return { ...state, loading: false, transactions: action.payload };
    case STUDENT_TRANSACTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Saved Preferences
    case STUDENT_SAVEDPREFERENCES_REQUEST:
      return { ...state, loading: true, error: null };
    case STUDENT_SAVEDPREFERENCES_SUCCESS:
      return { ...state, loading: false, savedPreferences: action.payload };
    case STUDENT_SAVEDPREFERENCES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Prep Batches
    case STUDENT_PREPS_BATCHES_REQUEST:
      return { ...state, loading: true, error: null };
    case STUDENT_PREPS_BATCHES_SUCCESS:
      return { ...state, loading: false, prepsBatches: action.payload };
    case STUDENT_PREPS_BATCHES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
