import actionTypes from "./DashboardActionTypes";

const initialState = {
    weeklyStepsCount: [],
    weeklyHeartPoints: [],
    weeklyCaloriesBurned: [],
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

        case actionTypes.GET_WEEKLY_DATA: 
            return {
                ...state,
                weeklyData: action.payload 
            };

        default:
            return state;
    }
}

export default DashboardReducer;