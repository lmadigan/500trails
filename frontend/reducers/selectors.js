export const selectTrip = ({trips}, id) => {
   const trip = trips[id] || {};
   return trip;
};
