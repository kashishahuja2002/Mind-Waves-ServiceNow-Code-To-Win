import actionTypes from "./AchievementsActionTypes";
import { months } from "../../components/Constants";

const initialState = {
    badges: [],
    monthlySum: {
        stepCount: 0,
        heartPoints: 0,
        caloriesBurned: 0
    }
};

const AchievementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_BADGES: 
            let sortedBadges =  action.payload.sort(function(a,b) {
                                    return months.indexOf(b.month) - months.indexOf(a.month);
                                });
            return {
                ...state,
                badges: sortedBadges 
            };

        case actionTypes.MONTHLY_SUM: 
            return {
                ...state,
                monthlySum: action.payload
            };

        default:
            return state;
    }
}

export default AchievementsReducer;