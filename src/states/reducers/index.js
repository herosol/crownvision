import { combineReducers } from "redux";
import authReducers from "./authReducers";
import blogScreenReducers from "./blogScreenReducers";
import bookSlotReducers from "./bookSlotReducers";
import homeScreenReducers from "./homeScreenReducers";
import locationsScreenReducers from "./locationsScreenReducers";
import contactUsScreenReducers from "./contactUsScreenReducers";

export default combineReducers({
  auth: authReducers,
  bookSlot: bookSlotReducers,
  homeScreen: homeScreenReducers,
  locationsScreen: locationsScreenReducers,
  blog: blogScreenReducers,
  contactUs: contactUsScreenReducers
});
