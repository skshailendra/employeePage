export const GET_STARTED = 'GET_STARTED';
export const FORMS_VALID = 'FORMS_VALID';

export const getStarted = () => {
  return {
    type: GET_STARTED
  };
};

export const saveFormValid = (event, id) => {
  return {
    type: FORMS_VALID,
    event: event,
    id: id
  };
};

export const formValid = (event, id) => {
  event.persist();
  return dispatch => {
    setTimeout( ()=>{
      console.log(event.target.value);
      return dispatch(saveFormValid(event,id));
    },0)
  }
};
