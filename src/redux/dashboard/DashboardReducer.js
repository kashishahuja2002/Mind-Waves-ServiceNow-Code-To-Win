import actionTypes from "./DashboardActionTypes";

const initialState = {
    stepsCount: [],
    heartPoints: [],
    caloriesBurned: [],
};

const DashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STEP_COUNT:
            return {
                ...state,
                stepsCount: action.payload 
            };

        case actionTypes.HEART_POINTS: 
            return {
                ...state,
                heartPoints: action.payload 
            };
            
        case actionTypes.CALORIES_BURNED: 
            return {
                ...state,
                caloriesBurned: action.payload 
            };

        default:
            return state;
    }
}

export default DashboardReducer;