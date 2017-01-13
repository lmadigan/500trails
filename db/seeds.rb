# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(user_name: "hikerdude", password: "password")
User.create(user_name: "guest", password: "password123")
Trip.create(title: "Cala Capreria, Sicilia", description:"Part of Sicily's first nature reserve,
this trail was a
glimpse at natural beauty of Sicily. About a
mile-long hike led to this hidden beach with crystal
clear turquoise waters.", location:"Sicily, Italy", user_id: 2, image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484295924/13475017_10154102046959845_7576252100101282718_o_yvoedo.jpg")
