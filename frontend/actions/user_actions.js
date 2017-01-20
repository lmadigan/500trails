import * as UserAPIUtil from '../util/user_api_util';
import * as TripAPIUtil from '../util/trip_api_util';
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = user => dispatch => (
    UserAPIUtil.fetchUser(user)
    .then(thisUser => dispatch(receiveUser(thisUser))
));

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
