import * as TripAPIUtil from '../util/trip_api_util';
export const RECEIVE_TRIP = "RECEIVE_TRIP";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const RECEIVE_TRIP_ERRORS = "RECEIVE_TRIP_ERRORS";

export const createTrip = trip => dispatch => (
  TripAPIUtil.createTrip(trip)
    .then(newTrip => dispatch(receiveCurrentTrip(newTrip)),
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
    .then(newTrips => dispatch(receiveTrips(newTrips))
));

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
