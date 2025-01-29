import { LOGOUT } from "../actions/authActions";
import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  ADD_TEAM_FAILURE,
  DELETE_TEAM_FAILURE,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_REQUEST,
  EDIT_TEAM_FAILURE,
  EDIT_TEAM_SUCCESS,
  EDIT_TEAM_REQUEST,
} from "../actions/teamActions";

const initialState = {
  loading: false,
  teams: [],
  error: null,
  totalPages: null,
  page: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: [...state.teams, ...action.payload.result],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };
    case FETCH_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        totalPages: null,
        page: null,
      };

    case ADD_TEAM_REQUEST:
      return { ...state, loading: true };
    case ADD_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: [action.payload, ...state.teams],
      };
    case ADD_TEAM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: state.teams.filter((team) => team._id !== action.payload), // Remove deleted team
      };

    case DELETE_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Store the error message
      };

    case EDIT_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: state.teams.map((team) =>
          team._id === action.payload.data._id
            ? { ...team, ...action.payload.data }
            : team
        ),
      };
    case EDIT_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default teamReducer;
