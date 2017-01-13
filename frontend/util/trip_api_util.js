export const fetchTrips = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/trips',
    data
  });
};

export const fetchTrip = (trip_id) => {
  return $.ajax({
    method: "GET",
    url: `api/trips/${trip_id}`
  });
};

export const createTrip = (trip) => {
  return $.ajax({
    method: "POST",
    url: "api/trips",
    data: {trip}
  });
};

export const deleteTrip = (trip_id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/trips/${trip_id}`
  });
};
