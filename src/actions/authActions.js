import {
  LOG_IN,
  LOG_OUT,
  SET_USER_DATA,
  LOADING_CURRENT_SESSION
} from "./types";

export const logIn = () => {
  return {
    type: LOG_IN
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};

export const setUserData = userdata => {
  return {
    type: SET_USER_DATA,
    payload: userdata
  };
};

export const loadingCurrentSession = () => {
  return {
    type: LOADING_CURRENT_SESSION
  };
};
