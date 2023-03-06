import { combineReducers } from "redux";

import Reducer from "./Reducer";
import DashboardReducer from "./dashboard/DashboardReducer";
import ProfileReducer from "./profile/ProfileReducer";
import AchievementsReducer from './achievements/AchievementsReducer';
import LeaderboardReducer from "./leaderboard/LeaderboardReducer";

const RootReducer = combineReducers({
   app: Reducer,
   dashboard: DashboardReducer,
   profile: ProfileReducer,
   achievements: AchievementsReducer,
   leaderboard: LeaderboardReducer,
});

export default RootReducer;
