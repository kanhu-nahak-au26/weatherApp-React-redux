import {
  SET_SEARCHED_WEATHER,
  DELETE_SEARCHED_WEATHER,
  SET_SAVED_WEATHER,
  DELETE_SAVED_WEATHER,
  SAVE_WEATHER_LOCATION,
  TOGGLE_TEMP_SCALE
} from "./types";

export const setSearchedWeather = weather => {
  return {
    type: SET_SEARCHED_WEATHER,
    payload: weather
  };
};

export const deleteSearchedWeather = () => {
  return {
    type: DELETE_SEARCHED_WEATHER
  };
};

export const setSavedWeather = weather => {
  return {
    type: SET_SAVED_WEATHER,
    payload: weather
  };
};

export const deleteSavedWeather = weather => {
  return {
    type: DELETE_SAVED_WEATHER,
    payload: weather
  };
};

export const saveWeatherLocation = weather => {
  return {
    type: SAVE_WEATHER_LOCATION
  };
};

export const toggleTempScale = () => {
  return {
    type: TOGGLE_TEMP_SCALE
  };
};
