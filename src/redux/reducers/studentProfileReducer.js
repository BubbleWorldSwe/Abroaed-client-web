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
  STUDENT_DOCUMENTS_REQUEST,
  STUDENT_DOCUMENTS_FAILURE,
  STUDENT_DOCUMENTS_SUCCESS,
  UPLOAD_STUDENT_DOCUMENT_REQUEST,
  UPLOAD_STUDENT_DOCUMENT_FAILURE,
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
  uploadedDocuments: [],
  requestedDocuments: [],
};

export default function studentProfileReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENT_PROFILE_REQUEST:
    case EDIT_STUDENT_PROFILE_REQUEST:
    case STUDENT_APPLICATION_REQUEST:
    case STUDENT_TRANSACTIONS_REQUEST:

    case STUDENT_PREPS_BATCHES_REQUEST:
    case STUDENT_SAVEDPREFERENCES_REQUEST:
    case STUDENT_DOCUMENTS_REQUEST:
    case UPLOAD_STUDENT_DOCUMENT_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_STUDENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentProfile: action.payload,
        studentId: action.payload?.user?._id,
        leadId: action.payload?._id,
      };

    case EDIT_STUDENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentProfile: action.payload,
      };

    // Applications

    case STUDENT_APPLICATION_SUCCESS:
      return { ...state, loading: false, applications: action.payload };

    // Transactions

    case STUDENT_TRANSACTIONS_SUCCESS:
      return { ...state, loading: false, transactions: action.payload };

    // Saved Preferences

    case STUDENT_SAVEDPREFERENCES_SUCCESS:
      return { ...state, loading: false, savedPreferences: action.payload };

    case STUDENT_PREPS_BATCHES_SUCCESS:
      return { ...state, loading: false, prepsBatches: action.payload };

    case STUDENT_DOCUMENTS_SUCCESS:
      return { ...state, loading: false, documents: action.payload };

    case FETCH_STUDENT_PROFILE_FAILURE:
    case STUDENT_APPLICATION_FAILURE:
    case EDIT_STUDENT_PROFILE_FAILURE:
    case STUDENT_TRANSACTIONS_FAILURE:
    case STUDENT_SAVEDPREFERENCES_FAILURE:
    case STUDENT_PREPS_BATCHES_FAILURE:
    case STUDENT_DOCUMENTS_FAILURE:
    case UPLOAD_STUDENT_DOCUMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
