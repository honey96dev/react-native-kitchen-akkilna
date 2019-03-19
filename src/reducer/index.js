import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import AccountReducer from "./AccountReducer";

export default combineReducers({
  login: LoginReducer,
  user: UserReducer,
  account: AccountReducer
});
