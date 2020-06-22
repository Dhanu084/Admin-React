import { combineReducers } from "redux";
import users from "./users";
import catalogues from "./catalogues";

export default combineReducers({
  users,
  catalogues,
});
