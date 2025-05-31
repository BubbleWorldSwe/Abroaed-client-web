import {
  FETCH_LEADS_REQUEST,
  FETCH_LEADS_SUCCESS,
  FETCH_LEADS_FAILURE,
  ADD_LEAD_REQUEST,
  ADD_LEAD_SUCCESS,
  ADD_LEAD_FAILURE,
  DELETE_LEAD_REQUEST,
  DELETE_LEAD_SUCCESS,
  DELETE_LEAD_FAILURE,
  EDIT_LEAD_REQUEST,
  EDIT_LEAD_SUCCESS,
  EDIT_LEAD_FAILURE,
  SET_SELECTED_LEAD,
  FETCH_LEADS_STUDENTS_REQUEST,
  EDIT_LEADS_STUDENT_SUCCESS,
  ADD_LEAD_SAVEDPREFRENCES,
  SEARCH_LEADS_REQUEST,
  SEARCH_LEADS_SUCCESS,
  SEARCH_LEADS_FAILURE,
  ADD_LEAD_DOCUMENTS,
  LEADS_DATA_LOADING,
  EDIT_LEADS_STUDENT_REQUEST,
  FETCH_LEADS_FILTER_DATA_REQUEST,
  ADD_BULK_LEADS_REQUEST,
  FETCH_LEADS_FILTER_DATA_SUCCESS,
  ADD_BULK_LEADS_SUCCESS,
  FETCH_LEADS_FILTER_DATA_FAILURE,
  ADD_BULK_LEADS_FAILURE,
} from "../actions/leadsActions";

const initialState = {
  loading: false,
  leads: [],
  error: null,
  totalPages: null,
  page: 1,
  limit: null,
  total: null,
  selectedLead: {},
  success: null,
};

export const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEADS_REQUEST:
    case ADD_LEAD_REQUEST:
    case DELETE_LEAD_REQUEST:
    case EDIT_LEAD_REQUEST:
    case EDIT_LEADS_STUDENT_REQUEST:
    case FETCH_LEADS_STUDENTS_REQUEST:
    case SEARCH_LEADS_REQUEST:
    case FETCH_LEADS_FILTER_DATA_REQUEST: // New case
    case ADD_BULK_LEADS_REQUEST: // New case
      return { ...state, loading: true, success: null };

    case FETCH_LEADS_SUCCESS:

    case FETCH_LEADS_FILTER_DATA_SUCCESS:
      console.log(action?.payload);
      return {
        ...state,
        loading: false,
        leads:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.leads,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case SEARCH_LEADS_SUCCESS:
      console.log(action?.payload);
      return {
        ...state,
        loading: false,
        /*   leads:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.leads,
                { index: action.payload.page, data: action.payload.result },
              ], */

        leads: [{ index: 1, data: action.payload.result }],

        totalPages: action.payload.totalPages || 1,
        page: action.payload.page || 1,

        total: action.payload.total || action.payload.result?.length,
      };

    case EDIT_LEAD_SUCCESS:
      return {
        ...state,
        loading: false,
        /*  leads: state.leads.map((lead) => ({
          ...lead,
          data: lead.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })), */
        selectedLead: action.payload,
        leads: [],
        error: null,
        totalPages: null,
        page: 1,
        limit: null,
        total: null,
      };

    case EDIT_LEADS_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        /*  leads: state.leads.map((lead) => ({
          ...lead,
          data: lead.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })), */
        selectedLead: action.payload,
        leads: [],
        error: null,
        totalPages: null,
        page: 1,
        limit: null,
        total: null,
      };

    case DELETE_LEAD_SUCCESS:
      return initialState;

    case ADD_LEAD_SUCCESS:
    case ADD_BULK_LEADS_SUCCESS:
      return { ...initialState, success: true };

    case FETCH_LEADS_FAILURE:
    case ADD_LEAD_FAILURE:
    case DELETE_LEAD_FAILURE:
    case EDIT_LEAD_FAILURE:
    // case FETCH_LEADS_FILTER_DATA_FAILURE:
    case ADD_BULK_LEADS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        //  leads: [],
        success: false,
      };

    case FETCH_LEADS_FILTER_DATA_FAILURE:
      return {
        ...state,
        loading: false,

        leads: [],
        totalPages: null,
        page: 1,
        limit: null,
        total: null,
        error: action.payload,
      };

    case SEARCH_LEADS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_LEAD:
      return { ...state, selectedLead: action.payload, loading: false };

    case ADD_LEAD_SAVEDPREFRENCES:
      return {
        ...state,
        loading: false,
        /*  leads: state.leads.map((lead) => ({
          ...lead,
          data: lead.data.map((item) =>
            item?._id === action?.payload?.user?._id
              ? {
                  ...item,
                  savedPreferences: action.payload || [],
                }
              : item
          ),
        })),
 */
        selectedLead: {
          ...state.selectedLead,
          savedPreferences: action.payload || [],
        },

        leads: [],
        error: null,
        totalPages: null,
        page: 1,
        limit: null,
        total: null,
      };

    case ADD_LEAD_DOCUMENTS:
      return {
        ...state,
        loading: false,

        selectedLead: {
          ...state.selectedLead,
          documents: action.payload || [],
        },

        leads: [],

        error: null,
        totalPages: null,

        page: 1,
        limit: null,
        total: null,
      };

    case LEADS_DATA_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
