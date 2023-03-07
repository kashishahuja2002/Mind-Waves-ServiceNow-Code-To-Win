import actionTypes from "./DashboardActionTypes";

const initialState = {
    weeklyStepsCount: [],
    weeklyHeartPoints: [],
    weeklyCaloriesBurned: [],
    monthlyStepsCount: [],
    monthlyHeartPoints: [],
    monthlyCaloriesBurned: [],
    weeklyData: [],
    monthlyData: [],
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
            let sortedWeeklyData = action.payload.sort(function(a,b) {
                    return new Date(a.date) - new Date(b.date);
                });

            return {
                ...state,
                weeklyData: sortedWeeklyData 
            };

        case actionTypes.GET_MONTHLY_DATA: 
            let sortedMonthlyData = action.payload.sort(function(a,b) {
                    return new Date(a.date) - new Date(b.date);
                });

            let groupedMonthlyData = [];
            let counter = 1;
            let newActivity = {
                exercise: 0,
                meditation: 0,
                mood: 0,
                water: 0
            }

            sortedMonthlyData.forEach(element => {
                if(counter === 7) {
                    newActivity = {
                        exercise: newActivity.exercise + element.activity.exercise,
                        meditation: newActivity.meditation + element.activity.meditation,
                        mood: newActivity.mood + element.activity.mood,
                        water: newActivity.water + element.activity.water
                    }
                    newActivity.mood = Math.round(newActivity.mood/7);
                    groupedMonthlyData.push({activity: newActivity});
                    counter = 1;
                    newActivity = {
                        exercise: 0,
                        meditation: 0,
                        mood: 0,
                        water: 0
                    }
                } 
                else {
                    newActivity = {
                        exercise: newActivity.exercise + element.activity.exercise,
                        meditation: newActivity.meditation + element.activity.meditation,
                        mood: newActivity.mood + element.activity.mood,
                        water: newActivity.water + element.activity.water
                    }
                    counter++;
                }
            });
            if(counter != 1) {
                newActivity.mood = Math.round(newActivity.mood/(counter-1));
                groupedMonthlyData.push({activity: newActivity});
            }

            return {
                ...state,
                monthlyData: groupedMonthlyData 
            };

        default:
            return state;
    }
}

export default DashboardReducer;