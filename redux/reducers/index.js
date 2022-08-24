import auth from "./auth";
import alert from "./alert";
import cart from "./cart";
import { combineReducers } from "redux";

export default combineReducers({
  auth,
  alert,
  cart,
});
