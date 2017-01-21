import * as TripAPIUtil from '../util/trip_api_util';
export const RECEIVE_TRIP = "RECEIVE_TRIP";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const RECEIVE_TRIP_ERRORS = "RECEIVE_TRIP_ERRORS";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const CLEAR_TRIP_ERRORS = "CLEAR_TRIP_ERRORS";
import { receiveUser } from './user_actions';
import {merge} from 'lodash';

export const createTrip = trip => dispatch => (
    TripAPIUtil.createTrip(trip)
    .then(user => dispatch(receiveUser(user)),
    err => dispatch(receiveTripErrors(err.responseJSON)))
  );

  export const updateTrip = trip => dispatch => (
      TripAPIUtil.updateTrip(trip)
      .then(user => dispatch(receiveUser(user)),
      err => dispatch(receiveTripErrors(err.responseJSON)))
    );

export const fetchTrip = trip => dispatch => (
    TripAPIUtil.fetchTrip(trip)
    .then(newTrip => dispatch(receiveCurrentTrip(newTrip))
));

export const fetchTrips = trips => dispatch => (
  TripAPIUtil.fetchTrips(trips)
    .then(newTrips => dispatch(receiveTrips(newTrips))
));

export const deleteTrip = trip => dispatch => (
  TripAPIUtil.deleteTrip(trip)
    .then(user => dispatch(receiveUser(user))
));

export const createImage = image => dispatch => (
  TripAPIUtil.createImage(image)
    .then(newImage => dispatch(receiveImage(newImage)))
);

export const createLike = data => dispatch => (
  TripAPIUtil.createLike(data)
    .then(trip => dispatch(receiveCurrentTrip(trip)))
);

export const deleteLike = data => dispatch => {
  debugger
  return (
    TripAPIUtil.deleteLike(data)
      .then(trip => dispatch(receiveCurrentTrip(trip)))
  );

};


export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

export const receiveCurrentTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});

export const receiveTripErrors = errors => ({
  type: RECEIVE_TRIP_ERRORS,
  errors
});

export const clearTripErrors = () => ({
  type: CLEAR_TRIP_ERRORS
});

export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});
