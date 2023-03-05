import actionTypes from './AchievementsActionTypes';
import http from '../../services/_httpServices';

export const getBadges = (url, params) => {
    return (dispatch) => {
        http.HttpGet(url, params)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log(response.data.data[0]);
                    // dispatch(get_badges(response.data.data))
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