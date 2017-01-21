export const fetchTrips = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/trips'
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
    data: trip
  });
};

export const updateTrip = (trip) => {
  return $.ajax({
    method: "PATCH",
    url: `api/trips/${trip.id}`,
    data: trip
  });
};

export const deleteTrip = (trip_id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/trips/${trip_id}`
  });
};

export const createImage = (image) => {
  return $.ajax({
    method: 'POST',
    url: 'api/images',
    data: {image}
  });
};

export const createLike = (id) => {
  return $.ajax({
    method: 'POST',
    url: `api/trips/${id}/likes`,
    data: id
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/trips/${id}/likes`
  });
};
