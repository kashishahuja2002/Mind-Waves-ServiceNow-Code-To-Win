import { updateBarLoading } from '../Actions';
import axios from "axios";
import actionTypes from './DashboardActionTypes';

export const getGoogleFitData = (body, action) => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        axios.post("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", body, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then((response) => {
            dispatch(get_google_fit_data(response.data.bucket, action))
            dispatch(updateBarLoading(false));
        }, 
        (error) => {
            dispatch(updateBarLoading(false));
            console.log("ERROR: ", error);
        });
    }
}

const get_google_fit_data = (data, action) => {
    return {
        type: action,
        payload: data
    }
} 