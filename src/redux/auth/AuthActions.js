import actionTypes from './AuthActionTypes';

export const Auth = (data) => {
    return {
        type: actionTypes.USER,
        payload: data,
    }
}