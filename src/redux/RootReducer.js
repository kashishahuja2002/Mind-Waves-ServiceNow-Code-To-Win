import { combineReducers } from "redux";

import Reducer from "./Reducer";
import DashboardReducer from "./dashboard/DashboardReducer";

const RootReducer = combineReducers({
   app: Reducer,
   dashboard: DashboardReducer,
});

export default RootReducer;
