import TripsReducer from '../frontend/reducers/trips_reducer.js';
import {createTrip, deleteTrip, fetchTrips, receiveCurrentTrip, RECEIVE_TRIPS} from '../frontend/actions/trip_actions.js';


describe('>>>TripsReducer updates trips', () => {
  let trips = {1:{location: "Santa Fe", title: "What a fun trip", description: "we had a blast in Santa Fe"}
  , 2: {location: "Moutain View", title: "fun fun fun", description: "I live in mountain view"}};
  let state = {trips: {}};
  it('reducer for receiveTrips', () => {
    state = TripsReducer({type: RECEIVE_TRIPS, trips});
    expect(state).toEqual({trips: {1:{location: "Santa Fe", title: "What a fun trip", description: "we had a blast in Santa Fe"}
    , 2: {location: "Moutain View", title: "fun fun fun", description: "I live in mountain view"}}});
  });
});
