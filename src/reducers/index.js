import { combineReducers } from "redux";
import authReducer from "./authReducer";
import savedLocationsReducer from "./savedLocationsReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  auth: authReducer,
  savedlocations: savedLocationsReducer,
  weather: weatherReducer
});
