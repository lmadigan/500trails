import  { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const UsersReducer = (state = {} , action) => {
Object.freeze(state);
switch (action.type) {
  case RECEIVE_USER:
    let user = action.user;
    return merge({}, user);
  default:
    return state;
  }
};

export default UsersReducer;
