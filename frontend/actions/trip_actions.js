import * as TripAPIUtil from '../util/trip_api_util';
export const RECEIVE_TRIP = "RECEIVE_TRIP";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const RECEIVE_TRIP_ERRORS = "RECEIVE_TRIP_ERRORS";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
import {merge} from 'lodash';


// export const createTrip = trip => dispatch => (
//   TripAPIUtil.createTrip(trip.trip).then(
//       newTrip => (
//         // let image = merge({}, trip.image, {image : {trip_id: newTrip.id}});
//         TripAPIUtil.createImage(trip.image).then(
//           dispatch(receiveCurrentTrip(newTrip))
//         ),
//     err => dispatch(receiveTripErrors(err.responseJSON)))
// ));

 export function createTrip (trip) {
   console.log(trip);
  return function(dispatch) {
    const image = trip.image ;
    TripAPIUtil.createTrip(trip.trip).then(
        function(newTrip) {
          debugger
          let imageItem = merge({}, image, {image : {trip_id: newTrip.id}});
          return TripAPIUtil.createImage(imageItem).then(
            dispatch(receiveCurrentTrip(newTrip))
          ),
          err => dispatch(receiveTripErrors(err.responseJSON));
        });
  };}



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

export const createImage = image => dispatch => (
  TripAPIUtil.createImage(image)
    .then(newImage => dispatch(receiveImage(newImage)))
);

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

export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});
