json.extract! trip, :id, :title, :description, :user_id,
  :location, :user, :images

json.images trip.images

json.trip_user trip.user


if current_user && current_user.liked_trips.include?(trip)
  json.liked true
else
  json.liked false
end
