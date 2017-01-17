# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(user_name: "hikerdude", password: "password")
User.create(user_name: "guest", password: "password123", background_photo: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484643221/8mbdd0phxgy-joshua-earle_zzcqgy.jpg",
  thumbnail:"http://res.cloudinary.com/dtnwzbeum/image/upload/v1484643375/IMG_0680_j4g1wb.jpg")

Trip.create(title: "Cala Capreria, Sicilia", description:"Part of Sicily's first nature reserve,
this trail was a
glimpse at natural beauty of Sicily. About a
mile-long hike led to this hidden beach with crystal
clear turquoise waters.", location:"Sicily, Italy",
user_id: 2)


Trip.create(title: "Under the Bixby Bridge", description:"hi", location:"Big Sur, California",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608400/500trails/hlmbw0mrgpg-josh-felise.jpg",
trip_id: 2)

Trip.create(title: "Palancar Beach", description:"Palm Trees", location:"Cozumel, Mexico",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608189/500trails/cosumel.jpg",
trip_id: 3)

Trip.create(title: "Agua Calientes", description:"Hiking along this city. Trails leading to Machu Pichu", location:"Peru",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608189/500trails/cosumel.jpg",
trip_id: 4)

Trip.create(title: "Arches National Park", description:"hi", location:"Moab, Utah",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608084/500trails/archesnationalpark.jpg",
trip_id: 5)



Trip.create(title: "Sarek National Park", description:"hi", location:"Jokkmokk Municipality, Lapland",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608083/500trails/sareknationalparksweden.jpg",
trip_id: 6)


Trip.create(title: "Salt Creek Falls", description:"Willamette National Forest", location:"Oakridge, Oregon",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608082/500trails/salt_creek_falls.jpg",
trip_id: 7)

Trip.create(title: "Point Dunes State Beach", description:"Shredding the Gnar", location:"Malibu, California",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608083/500trails/pointdumestatebeach.jpg",
trip_id: 8)


Trip.create(title: "Manhattan Beach", description:"Sunset Skim", location:"Manhattan Beach, California",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608081/500trails/manhattanhbeach.jpg",
trip_id: 9)

Trip.create(title: "Late night rides", description:"Zion Lodge", location:"Springdale, Utah",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608118/500trails/zionlodge_springdale.jpg",
trip_id: 10)

Trip.create(title: "Antelope Canyon", description:"hi", location:"Page, Arizona",
user_id: 2)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608084/500trails/antelope_canyon.jpg",
trip_id: 11)
