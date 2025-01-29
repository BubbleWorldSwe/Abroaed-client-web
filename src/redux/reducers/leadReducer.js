import { LOGOUT } from "../actions/authActions";
import {
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAILURE,
} from "../actions/rolesActions";

const initialState = {
  loading: false,
  roles: [],
  error: null,
};

export const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ROLES_SUCCESS:
      return { ...state, loading: false, roles: action.payload.data.result };
    case GET_ROLES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
