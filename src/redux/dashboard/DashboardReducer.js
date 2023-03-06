import actionTypes from "./DashboardActionTypes";

const initialState = {
    weeklyStepsCount: [],
    weeklyHeartPoints: [],
    weeklyCaloriesBurned: [],
    monthlyStepsCount: [],
    monthlyHeartPoints: [],
    monthlyCaloriesBurned: [],
    weeklyData: []
};

const DashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.WEEKLY_STEP_COUNT:
            return {
                ...state,
                weeklyStepsCount: action.payload 
            };

        case actionTypes.WEEKLY_HEART_POINTS:
            return {
                ...state,
                weeklyHeartPoints: action.payload 
            };
            
        case actionTypes.WEEKLY_CALORIES_BURNED: 
            return {
                ...state,
                weeklyCaloriesBurned: action.payload 
            };

        case actionTypes.MONTHLY_STEP_COUNT:
            return {
                ...state,
                monthlyStepsCount: action.payload 
            };

        case actionTypes.MONTHLY_HEART_POINTS: 
            return {
                ...state,
                monthlyHeartPoints: action.payload 
            };
            
        case actionTypes.MONTHLY_CALORIES_BURNED: 
            return {
                ...state,
                monthlyCaloriesBurned: action.payload 
            };

        case actionTypes.GET_WEEKLY_DATA: 
            let sortedData = action.payload.sort(function(a,b) {
                    return new Date(a.date) - new Date(b.date);
                });

            return {
                ...state,
                weeklyData: sortedData 
            };

        default:
            return state;
    }
}

export default DashboardReducer;