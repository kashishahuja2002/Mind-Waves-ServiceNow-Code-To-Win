import { combineReducers } from "redux";

import AuthReducer from "./auth/AuthReducer";

const RootReducer = combineReducers({
   auth: AuthReducer,
});

export default RootReducer;
