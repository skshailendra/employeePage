export const GET_STARTED = 'GET_STARTED';
export const FORMS_VALID = 'FORMS_VALID';

export const getStarted = () => {
  return {
    type: GET_STARTED
  };
};

export const formValid = (event, id) => {
  return {
    type: FORMS_VALID,
    event: event,
    id: id
  };
};
