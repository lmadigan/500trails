import  { RECEIVE_TRIP, RECEIVE_TRIPS,
  RECEIVE_TRIP_ERRORS } from '../actions/trip_actions';
import merge from 'lodash/merge';


const TripsReducer = (state = {} , action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRIP:
      return merge({}, state, {
        [action.trip.id]: action.trip
      });
    case RECEIVE_TRIPS:
      return merge({}, state, action.trips);
    case RECEIVE_TRIP_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
    }
};

export default TripsReducer;
