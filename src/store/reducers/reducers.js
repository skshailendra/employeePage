import * as actionTypes from '../actions/actions';
import {updateObject} from '../utility';

const initiaState = {
    getStarted: false
};

const reducer = (state=initiaState , action) =>{
    switch(action.type){
        case actionTypes.GET_STARTED:
            return updateObject(state,{ getStarted : !state.getStarted})
        default:
            return state;
    }
};

export default reducer;

