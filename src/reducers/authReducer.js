import {
  LOG_IN,
  LOG_OUT,
  SET_USER_DATA,
  LOADING_CURRENT_SESSION
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isSessionLoading: true,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false
      };
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    case LOADING_CURRENT_SESSION:
      return {
        ...state,
        isSessionLoading: false
      };
    default:
      return state;
  }
}
