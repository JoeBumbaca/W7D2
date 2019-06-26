import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';


const initialState = {

};

const errorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ERRORS:
      for (let i = 0; i < action.errors.length; i++) {
        nextState[action.errors[i].id] = action.errors[i];
      }
      return nextState;
    case CLEAR_ERRORS:
      nextState = initialState;
      return nextState;
    default:
      return state;
  }
};

export default errorsReducer;