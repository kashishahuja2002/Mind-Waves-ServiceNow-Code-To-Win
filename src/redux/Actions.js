import http from '../services/_httpServices';
import actionTypes from './ActionTypes';

export const Auth = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", {}, body)
            .then((response) => {
                if(response.data.status === 200) {
                    localStorage.setItem('token', response.data.token);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const updateBarLoading = (data) => {
    return {
        type: actionTypes.BAR_LOADING,
        payload: data,
    }
}

export const updatePageLoading = (data) => {
    return {
        type: actionTypes.PAGE_LOADING,
        payload: data,
    }
}