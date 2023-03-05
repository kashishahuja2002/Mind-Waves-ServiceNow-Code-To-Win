import http from "../../services/_httpServices";
import actionTypes from './ProfileActionTypes';

export const getProfile = (url, params) => {
    return (dispatch) => {
        http.HttpGet(url, params)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(get_profile(response.data.data))
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const editProfile = (url, body) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            http.HttpCall(url, "post", {}, body)
                .then((response) => {
                    if(response.data.status === 200) {
                        dispatch(edit_profile(body))
                        return resolve('');
                    }
                    return reject('');
                })
                .catch((error) => {
                    console.log("Error: ",error);
                    return reject(error);
                })
        })
    }
}

const get_profile = (data) => {
    return {
        type: actionTypes.GET_PROFILE,
        payload: data
    }
}

const edit_profile = (data) => {
    return {
        type: actionTypes.EDIT_PROFILE,
        payload: data
    }
}