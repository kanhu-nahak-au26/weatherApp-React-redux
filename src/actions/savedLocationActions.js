import { ADD_SAVED_LOCATION, DELETE_SAVED_LOCATION } from "./types";

export const addSavedLocation = location => {
  return {
    type: ADD_SAVED_LOCATION,
    payload: location
  };
};

export const deleteSavedLocation = location => {
  return {
    type: DELETE_SAVED_LOCATION,
    payload: location
  };
};
