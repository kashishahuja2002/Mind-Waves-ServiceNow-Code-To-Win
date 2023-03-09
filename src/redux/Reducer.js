import actionTypes from "./ActionTypes";

const initialState = {
    barLoading: false,
    pageLoading: false,
};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.BAR_LOADING: 
            return {
                ...state,
                barLoading: action.payload 
            };

        case actionTypes.PAGE_LOADING: 
            return {
                ...state,
                pageLoading: action.payload 
            };

        default:
            return state;
    }
}

export default Reducer;