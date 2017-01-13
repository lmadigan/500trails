@trips.each do |trip|
  json.set! trip.id do
    json.partial! "api/trips/trips", trip: trip
  end 
end
