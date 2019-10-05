import * as actionTypes from '../actions/actions';

const initiaState = {
    getStarted: false
};

const reducer = (state=initiaState , action) =>{
    switch(action.type){
        case actionTypes.GET_STARTED:
            return {
                ...state,
                getStarted : !state.getStarted
            }
        default:
            return state;
    }
};

export default reducer;

