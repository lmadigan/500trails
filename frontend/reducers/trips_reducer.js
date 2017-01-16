import  { RECEIVE_TRIP, RECEIVE_TRIPS,
  RECEIVE_TRIP_ERRORS, RECEIVE_IMAGE } from '../actions/trip_actions';
import merge from 'lodash/merge';


const TripsReducer = (state = {} , action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TRIP:
      return merge({}, state, {
        [action.trip.id]: action.trip
      });
    case RECEIVE_TRIPS:
      return merge({}, state, action.trips);
    case RECEIVE_IMAGE:
      const image = action.image;
      newState[image.trip_id].images.push(image);
      return newState;
    case RECEIVE_TRIP_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
    }
};

export default TripsReducer;
