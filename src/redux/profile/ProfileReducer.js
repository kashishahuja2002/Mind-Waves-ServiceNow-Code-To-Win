import actionTypes from "./ProfileActionTypes";

const initialState = {
    user: []
};

const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PROFILE: 
            return {
                ...state,
                user: action.payload 
            };

        default:
            return state;
    }
}

export default ProfileReducer;