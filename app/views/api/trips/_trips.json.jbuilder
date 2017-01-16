json.extract! trip, :id, :title, :description, :user_id,
  :location, :user

json.images do
  json.partial! 'api/images/image', collection: trip.images, as: :image
end
