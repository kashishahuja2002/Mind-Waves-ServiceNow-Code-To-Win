import http from "../../services/_httpServices";
import actionTypes from './ProfileActionTypes';

export const getProfile = (url, params) => {
    return (dispatch) => {
        http.HttpGet(url, params)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(profile(response.data.data))
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const profile = (data) => {
    return {
        type: actionTypes.PROFILE,
        payload: data
    }
}