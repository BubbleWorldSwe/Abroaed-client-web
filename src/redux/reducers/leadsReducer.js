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
};

export const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEADS_REQUEST:
    case ADD_LEAD_REQUEST:
    case DELETE_LEAD_REQUEST:
    case EDIT_LEAD_REQUEST:
    case FETCH_LEADS_STUDENTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_LEADS_SUCCESS:
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
    case ADD_LEAD_SUCCESS:
      return initialState;

    case FETCH_LEADS_FAILURE:
    case ADD_LEAD_FAILURE:
    case DELETE_LEAD_FAILURE:
    case EDIT_LEAD_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_LEAD:
      return { ...state, selectedLead: action.payload };

    case ADD_LEAD_SAVEDPREFRENCES:
      console.log("ADD_LEAD_SAVEDPREFRENCES");
      console.log(action.payload);

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

    default:
      return state;
  }
};
