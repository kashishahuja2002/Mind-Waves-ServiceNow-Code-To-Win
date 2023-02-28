import actionTypes from "./AuthActionTypes";

const initialState = {
    user: []
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER: 
            return {
                ...state,
                user: action.payload 
            };

        default:
            return state;
    }
}

export default AuthReducer;