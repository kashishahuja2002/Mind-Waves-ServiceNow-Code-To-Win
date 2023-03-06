import actionTypes from './DailyActivitiesActionTypes';
import http from '../../services/_httpServices';

export const addWater = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", {}, body)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log("Successfully added water: ", response.data.data);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}
