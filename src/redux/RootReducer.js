import { combineReducers } from "redux";

import AuthReducer from "./auth/AuthReducer";

const RootReducer = combineReducers({
   user: AuthReducer,
});

export default RootReducer;
