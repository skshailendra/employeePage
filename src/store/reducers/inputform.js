import * as actionTypes from '../actions/actions';
import Formdata from '../../Formdata/formdata';
const initiaState = {
    formsIsValid: false,
    Formdata:Formdata
};

const reducer = (state=initiaState , action) =>{
    switch(action.type){
        case actionTypes.FORMS_VALID:
            const copyFormData = {
                ...state.Formdata
                };
                const copyFormId = {
                ...copyFormData[action.id]
                };
                copyFormId.value = action.event.target.value;
                copyFormData[action.id] = copyFormId;
                copyFormData[action.id].valid = action.checkValidation(
                copyFormId.value,
                copyFormId.validation
                );
                copyFormId.touched = true;
                let formsIsValid = true;
                for (let ipInden in copyFormData) {
                formsIsValid = copyFormData[ipInden].valid && formsIsValid;
                }
                console.log(formsIsValid);
            return {
                Formdata: copyFormData,
                formsIsValid: formsIsValid
            }
        default:
            return state;
    }
};

export default reducer;

