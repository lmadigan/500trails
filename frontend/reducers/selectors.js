import { values } from 'lodash';

export const selectTrip = ({trips}, id) => {
   const trip = trips[id] || {};
   return trip;
};

export const selectTrips = ({trips}) => {
   return _.values(trips)
};
