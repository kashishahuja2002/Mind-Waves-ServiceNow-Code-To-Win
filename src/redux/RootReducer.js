import { combineReducers } from "redux";

import Reducer from "./Reducer";
import DashboardReducer from "./dashboard/DashboardReducer";
import ProfileReducer from "./profile/ProfileReducer";

const RootReducer = combineReducers({
   app: Reducer,
   dashboard: DashboardReducer,
   profile: ProfileReducer,
});

export default RootReducer;
