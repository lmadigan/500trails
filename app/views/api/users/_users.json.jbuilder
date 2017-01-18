json.extract! user, :id, :user_name, :trips, :images, :thumbnail,
:background_photo, :liked_trips

json.liked_trips user.liked_trips do |liked_trip|
  json.title liked_trip.title
  json.location liked_trip.location
  json.description liked_trip.description

  json.images liked_trip.images do |image|
    json.image_url image.image_url
  end
end

json.trips user.trips do |trip|
  json.title trip.title
  json.location trip.location
  json.description trip.description

  json.images trip.images do |image|
    json.image_url image.image_url
  end
end
