import { combineReducers } from "redux";
import authReducers from "./authReducers";
import bookSlotReducers from "./bookSlotReducers";
import homeScreenReducers from "./homeScreenReducers";
import locationsScreenReducers from "./locationsScreenReducers";

export default combineReducers({
  auth: authReducers,
  bookSlot: bookSlotReducers,
  homeScreen: homeScreenReducers,
  locationsScreen: locationsScreenReducers,
});
