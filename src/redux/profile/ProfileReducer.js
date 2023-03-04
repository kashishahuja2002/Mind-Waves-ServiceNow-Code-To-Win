import actionTypes from "./ProfileActionTypes";

const initialState = {
    user: []
};

const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PROFILE: 
            return {
                ...state,
                user: action.payload 
            };

        case actionTypes.EDIT_PROFILE: 
            return {
                ...state,
                user: {
                    ...state.user, 
                    ...action.payload
                }
            };

        default:
            return state;
    }
}

export default ProfileReducer;