import actionTypes from './LeaderboardActionTypes';
import http from '../../services/_httpServices';

export const getLeaderboardRanks = (url, params) => {
    return (dispatch) => {
        http.HttpGet(url, params)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(leaderboard_ranks(response.data.data))
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const leaderboard_ranks = (data) => {
    return {
        type: actionTypes.LEADERBOARD,
        payload: data
    }
}