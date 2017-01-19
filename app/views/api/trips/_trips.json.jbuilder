json.extract! trip, :id, :title, :description, :user_id,
  :location, :user, :images

json.images trip.images

json.trip_user trips.user

# json.images do
#   json.partial! 'api/images/image', collection: trip.images, as: :image
# end
