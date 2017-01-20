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

export const createLike = data => dispatch => (
  TripAPIUtil.createLike(data)
    .then(user => dispatch(receiveUser(user)))
);

export const deleteLike = data => dispatch => (
  TripAPIUtil.deleteLike(data)
    .then(user => dispatch(receiveUser(user)))
);
