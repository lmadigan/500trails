# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(user_name: "hikerdude", password: "password")
user2 = User.create(user_name: "guest", password: "password123", fname: "Guest", lname: "User", background_photo: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484702113/8mbdd0phxgy-joshua-earle_vlf2d4.jpg",
  thumbnail:"http://res.cloudinary.com/dtnwzbeum/image/upload/v1484643375/IMG_0680_j4g1wb.jpg")

calacapria = Trip.create(title: "Cala Capreria, Sicilia", description:"Part of Sicily's first nature reserve,
this trail was a
glimpse at natural beauty of Sicily. About a
mile-long hike led to this hidden beach with crystal
clear turquoise waters.", location:"Sicily, Italy",
user_id: user1.id)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484608400/500trails/hlmbw0mrgpg-josh-felise.jpg",
trip_id: 1)


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

Like.create(user_id: 2, trip_id: 12)
Like.create(user_id: 2, trip_id: 13)
Like.create(user_id: 2, trip_id: 14)
Like.create(user_id: 2, trip_id: 15)


Trip.create(title: "Lake Michigian", description:"Blue Water", location:"Empire, Michigian",
user_id: 1)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484766314/michigan_esmtjl.jpg",
trip_id: 12)

Trip.create(title: "ON THE ROAD AGAIN", description:"Road trip from Seatle to Alaska", location:"Valdes, Alaska",
user_id: 1)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484766322/valdes_alaska_blweys.jpg",
trip_id: 13)

Trip.create(title: "Mount Saint Elias", description:"Ski Trip", location:"Alaska",
user_id: 1)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484766343/mountain_alaska_ujoewc.jpg",
trip_id: 14)

Trip.create(title: "Stary Night", description:"Stars by the Coast", location:"Greece",
user_id: 1)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484766340/Greece_mceb93.jpg",
trip_id: 15)


user3 = User.create(user_name: "yosemitechica", password: "password123", fname: "halie", lname: "berry", background_photo: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484702113/8mbdd0phxgy-joshua-earle_vlf2d4.jpg",
  thumbnail:"http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/jxwzosxc7ka-jonas-verstuyft.jpg")


Trip.create(title: "yosemite", description:"such an incredible lookout!", location:"Yosemite National Park, California",
user_id: 3)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812936/500trails/yosemite-valley.jpg",
trip_id: 16)
#
#
Trip.create(title: "I feel so small", description:"A walk through the valley before climbing to half dome", location:"Yosemite National Park, California",
user_id: 3)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812939/500trails/yosemite-national-park.jpg",
trip_id: 17)
#
Trip.create(title: "The best swings are ones made from rock", description:"Arches National Park", location:"Arches National Park",
user_id: 3)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812935/500trails/xdvppeepd8m-emily-campbell.jpg",
trip_id: 18)
#

Trip.create(title: "Zion National Park", description:"Neature", location:"Utah, United States",
user_id: 3)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812935/500trails/wn8ksly8kmq-zach-betten.jpg",
trip_id: 19)
#
Trip.create(title: "Yosemite", description:"Can't get enough of this place", location:"Yosemite National Park, California",
user_id: 3)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812942/500trails/wilderness.jpg",
trip_id: 20)

user4 = User.create(user_name: "daviddonner", password: "password123", fname: "david", lname: "donner", background_photo: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484702113/8mbdd0phxgy-joshua-earle_vlf2d4.jpg",
  thumbnail:"http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/jxwzosxc7ka-jonas-verstuyft.jpg")

#
Trip.create(title: "Hiking my way through Russia", description:"Russia is pretty neat", location:"Krutovo, Vladimir",
user_id: 4)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812941/500trails/vladimir_russia.jpg",
trip_id: 21)

Trip.create(title: "Hiking my way through Croatia", description:"Winter Wonderland", location:"Platak, Primorsko-Goranska",
user_id: 4)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812942/500trails/platak_croatia.jpg",
trip_id: 22)

Trip.create(title: "Olperer Hut ", description:"After a ten mile hike we cozied up in this cabin", location:"Ginzling, Austria",
user_id: 4)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812940/500trails/Olpererhutte_ginzling_autria.jpg",
trip_id: 23)

Trip.create(title: "A picture of a picture", description:"North Cascades National Park", location:"Washington, USA",
user_id: 4)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812940/500trails/north-cascades-national-park.jpg",
trip_id: 24)

user5 = User.create(user_name: "kat", password: "password123", fname: "Kat", lname: "Kat", background_photo: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484702113/8mbdd0phxgy-joshua-earle_vlf2d4.jpg",
  thumbnail:"http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/jxwzosxc7ka-jonas-verstuyft.jpg")

#
Trip.create(title: "Mountains", description:"Peaking", location:"Monte Lidon Italy",
user_id: 5)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812940/500trails/monte-lidon-italy.jpg",
trip_id: 25)

Trip.create(title: "Snow Shoeing", description:"Winter Wonderland, Russia", location:"Kolsky District Russia",
user_id: 5)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812939/500trails/kolsky_district_russia.jpg",
trip_id: 26)

Trip.create(title: "Haifoss Waterfall", description:"And they say, don't go chasing waterfalls", location:"Iceland",
user_id: 5)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/haifoss-waterfall-iceland.jpg",
trip_id: 27)

Trip.create(title: "A trek through the snow", description:"Glencoe Highlands", location:"Highland Park, Illinois",
user_id: 5)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812939/500trails/glencoe_highland_usa.jpg",
trip_id: 28)

user6 = User.create(user_name: "hunter", password: "password123", fname: "Hunter", lname: "Gatherer", background_photo: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484702113/8mbdd0phxgy-joshua-earle_vlf2d4.jpg",
  thumbnail:"http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/jxwzosxc7ka-jonas-verstuyft.jpg")

#
Trip.create(title: "Deer and Grass", description:"Peaking Deer", location:"Montana",
user_id: 6)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/deer.jpg",
trip_id: 29)

Trip.create(title: "Paradise", description:"The most beautiful sunset", location:"Saint John's, Caribbean",
user_id: 6)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812937/500trails/e328apwyd_k-ismail-niyax.jpg",
trip_id: 30)

Trip.create(title: "Crater Lake", description:"And they say, don't go chasing lakes", location:"Cascade Mountains, Oregon",
user_id: 6)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812937/500trails/crater-lake-untied-states.jpg",
trip_id: 31)

Trip.create(title: "Cherokee National Forest", description:"Great Smoky Mountains National Park", location:"Southern Appalachian Mountains of east Tennessee",
user_id: 6)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812939/500trails/cherokee-national-forest.jpg",
trip_id: 32)

user6 = User.create(user_name: "brownie", password: "password123", fname: "Bronwinnn", lname: "Dunsky", background_photo: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484702113/8mbdd0phxgy-joshua-earle_vlf2d4.jpg",
  thumbnail:"http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/jxwzosxc7ka-jonas-verstuyft.jpg")

#
Trip.create(title: "French Alps", description:"Chamonix Monte Blanc", location:"Franc",
user_id: 7)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812935/500trails/chamonix-mont-blanc-franc.jpg",
trip_id: 33)

Trip.create(title: "Blanca Lake Trail", description:"6.5 mile hike around the lake", location:"Steven's Pass, Washington",
user_id: 7)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812935/500trails/blanca_lake.jpg",
trip_id: 34)

Trip.create(title: "Minffordd Path", description:"Cader Idris is a mountain in Snowdonia National Park near the town of Dolgellau.", location:"Gwynedd, Wales",
user_id: 7)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812935/500trails/cadair-idris-penygadair-dolgellun-united-kingdom.jpg",
trip_id: 35)

Trip.create(title: "Brecklet Trail", description:"The village of Ballachulish", location:"Lochaber, Highland, Scotland,",
user_id: 7)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812934/500trails/ballachulish-united-kingdom.jpg",
trip_id: 36)

Trip.create(title: "Lake McDonald", description:"A beautiful lake to go kayaking in with mountains surrounding on all sides. Take a dip to cool off
and go for a hike on one of the many trails surrounding the lake.", location:"Glacier National Park, Montana.",
user_id: 3)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954066/500trails/glacier_national_park_lake_mcDOnald.jpg",
trip_id: 37)

Trip.create(title: "Homer Tunnel", description:"Worth pausing before going through the tunnel. fantastic scenery on both side of the tunnel. Allow plenty of time as it may take
you 20 minutes to get through on a busy day. Plenty of space to stop so do so.", location:"Milford Sound, New Zealand",
user_id: 4)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954059/500trails/homer_tunel_fiorland.jpg",
trip_id: 38)

Trip.create(title: "Sani Pass, Mkhomazi Wilderness area", description:"There might be higher peaks in Africa, but you won't find a pub at a higher elevation than the one at Sani Mountain Lodge (a large painted sign even boasts
The Highest Pub in Africa). This place teeters just at the edge
 of these cliffs, on what feels like the edge of the world. ", location:"South AfricA",
user_id: 5)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954123/500trails/paniPass_mkhomaziWildernass.jpg",
trip_id: 39)

Trip.create(title: "Les Îles-de-la-Madeleine", description:"So many birds on that rock!!!", location:" Quebec, Canada",
user_id: 6)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954134/500trails/les_fles-de-la-Madeleine_canada.jpg",
trip_id: 40)

Trip.create(title: "El Chaltén", description:"Hiking to the summit", location:"Argentina",
user_id: 7)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954113/500trails/el_chaten_argentina.jpg",
trip_id: 41)

Trip.create(title: "San Juan del SUr", description:"Situated on Nicaruaga's southern Pacific coast, this funky beach town
is sure to be a great time. With a year-round hot climate (about 85 F on average) and nice sea breezes, the lifestyle here is
the proverbial beach life made famous by the original surfing kahunas who found the waves first and spread the word. No sleeves
or long pants needed.", location:"Nicaragua",
user_id: 3)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954094/500trails/nicaragua.jpg",
trip_id: 42)


Trip.create(title: "Hluhluwe Game Reserve ", description:"We stayed at a lodge called Gqoyeni lodge .
This is a beautiful private lodge on the river . There are 5 X 2 sleeper rooms with a dining / kitchen facility linked by a boardwalk. This lodged is unfenced.
 Lions , elephants , hyena and rhino are regularly seen from the lodge", location:"Hluhluwe–Imfolozi Park",
user_id: 4)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954066/500trails/hluhluwegamereserve.jpg",
trip_id: 43)


Trip.create(title: "Golden Hour", description:"A walk through the trees", location:"Tarakai, New Zealand",
user_id: 5)
Image.create(image_url: "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954164/500trails/taranaki.jpg",
trip_id: 44)

Trip.create(title: "Surf's Up", description:"", location:"",
user_id: 6)
Image.create(image_url: "",
trip_id: 45)
# //aoraki mount cook new zealand
