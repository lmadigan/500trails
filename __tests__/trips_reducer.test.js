// import {TripsReducer} from '../frontend/reducers/trips_reducer.js';
const TripsReducer = require('../frontend/reducers/trips_reducer.js').default;
import {createTrip, deleteTrip, fetchTrips, receiveCurrentTrip, RECEIVE_TRIPS, RECEIVE_TRIP} from '../frontend/actions/trip_actions.js';


describe('>>>TripsReducer updates trips', () => {
  const trips = {1:{location: "Santa Fe", title: "What a fun trip", description: "we had a blast in Santa Fe"}
  , 2: {location: "Moutain View", title: "fun fun fun", description: "I live in mountain view"}};
  const state = {};
  it('reducer for receiveTrips', () => {
    let newState = TripsReducer(state, {type: RECEIVE_TRIPS, trips});
    expect(newState).toEqual({1:{location: "Santa Fe", title: "What a fun trip", description: "we had a blast in Santa Fe"}
    , 2: {location: "Moutain View", title: "fun fun fun", description: "I live in mountain view"}});
  });
});

describe('>>>TripReducer updates trips', () => {
  let state = {1:{location: "Santa Fe", title: "What a fun trip", description: "we had a blast in Santa Fe"}
  , 2: {location: "Moutain View", title: "fun fun fun", description: "I live in mountain view"}};
  const newTrip = {id: 3, description: "san diego", title: "san diego", location: "San Deigo"};
  it('reducer for receiveTrip', () => {
    let newState = TripsReducer(state, {type: RECEIVE_TRIP, trip: newTrip});
    expect(newState).toEqual({1:{location: "Santa Fe", title: "What a fun trip", description: "we had a blast in Santa Fe"}
    , 2: {location: "Moutain View", title: "fun fun fun", description: "I live in mountain view"}, 3: {id: 3, description: "san diego", title: "san diego", location: "San Deigo"}});
  });
});
