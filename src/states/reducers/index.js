import { combineReducers } from "redux";
import authReducers from "./authReducers";
import bookSlotReducers from "./bookSlotReducers";

export default combineReducers({
  auth: authReducers,
  bookSlot: bookSlotReducers,
});
