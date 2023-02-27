import actionTypes from './ActionTypes';

export const Auth = (data) => {
    return {
        type: actionTypes.USER,
        payload: data,
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