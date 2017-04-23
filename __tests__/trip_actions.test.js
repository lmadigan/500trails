import {createTrip, deleteTrip, fetchTrips, receiveCurrentTrip, RECEIVE_TRIP} from '../frontend/actions/trip_actions.js';



describe('>>>ACTION: Test Trip Actions', () => {
  it('actionCreator createTrip', () =>{
    const trip = {location: "Santa Fe", title: "What a fun trip", description: "we had a blast in Santa Fe"};
    const create = receiveCurrentTrip(trip);
    expect(create).toEqual({type: RECEIVE_TRIP, trip});
  });
});
