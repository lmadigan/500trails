import  { CLEAR_ERRORS, RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullState , action) => {
Object.freeze(state);
switch (action.type) {
  case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, _nullState, { currentUser });
  case RECEIVE_ERRORS:
    const errors = action.errors;
    return merge({}, state, { errors });
  case CLEAR_ERRORS:
    const newUser = action.currentUser;
    return merge({},  _nullState, { newUser });
  default:
    return state;
  }
};

export default SessionReducer;
