import actionTypes from './AchievementsActionTypes';
import http from '../../services/_httpServices';

export const getBadges = (url, params) => {
    return (dispatch) => {
        http.HttpGet(url, params)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(get_badges(response.data.data))
                    dispatch(monthly_sum(params))
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const get_badges = (data) => {
    return {
        type: actionTypes.GET_BADGES,
        payload: data
    }
}

const monthly_sum = (data) => {
    return {
        type: actionTypes.MONTHLY_SUM,
        payload: data
    }
}