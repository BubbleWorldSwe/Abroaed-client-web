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
  FETCH_ALL_TEAMS_SUCCESS,
  FETCH_ALL_TEAMS_REQUEST,
  FETCH_ALL_TEAMS_FAILURE,
} from "../actions/teamActions";

const initialState = {
  loading: false,
  teams: [],
  error: null,
  totalPages: null,
  page: 1,
  limit: null,
  total: null,
  allTeams: [],
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
    case FETCH_ALL_TEAMS_REQUEST:
    case ADD_TEAM_REQUEST:
    case DELETE_TEAM_REQUEST:
    case EDIT_TEAM_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_TEAMS_SUCCESS:
      console.log(action.payload.page, state.page, action.payload);
      return {
        ...state,
        loading: false,
        /*  teams:
          action.payload.page === 1
            ? action.payload.result
            : [...state.teams, ...action.payload.result],
 */
        teams:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.teams,
                { index: action.payload.page, data: action.payload.result },
              ],

        totalPages: action.payload.totalPages,
        page: action.payload.page,
        limit: action.payload.limit,
        total: action.payload.total,
      };

    case FETCH_ALL_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTeams: action.payload.result,
      };

    case EDIT_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,

        teams: state.teams.map((team) => ({
          ...team,
          data: team.data.map((item) =>
            item._id === action.payload.data._id
              ? { ...item, ...action.payload.data }
              : item
          ),
        })),
      };

    case ADD_TEAM_SUCCESS:
    case DELETE_TEAM_SUCCESS:
      return initialState;

    case FETCH_TEAMS_FAILURE:
    case DELETE_TEAM_FAILURE:
    case EDIT_TEAM_FAILURE:
    case ADD_TEAM_FAILURE:
    case FETCH_ALL_TEAMS_FAILURE:
      console.log(action);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    /* case LOGOUT:
      return initialState; */

    default:
      return state;
  }
};
