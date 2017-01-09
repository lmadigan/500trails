## Component Hierarchy

**Auth Form Container**
  - Header Container
  - AuthForm

**Home Container**
  - Header Container
  - Discover Container
    - Discover Nav Bar
    - Discover Google Maps
    - Discover Index

**Header Container**
  - Search
  - Log In Button
  - Sign Up Button
  - Demo Button

**Logged In Header Container**
  - Search
  - User Name
  - New Trip Button

**User Profile Container**
  - Logged In Header Container
  - Profile Stats Container
  - Profile Nav Bar
  - Trips Index

**Profile Stats Container**
 - User Name
 - Avatar Photo

**Saved Trips Container**
  - Logged In Header Container
  - Profile Stats Container
  - Profile Nav Bar
  - Saved Trips Index

**User Map Container**
  - Logged In Header Container
  - Profile Stats Container
  - Profile Nav Bar
  - User Profile Google Maps

**New Trip Container**
  - Photo Upload Container
    - Photo Upload Button
    - Drag and Drop Photo Area(bonus)
  - New Trip Form
    - Publish Trip Button
    - Title Text Box
    - Location Text Box
    - Description Text Area

**Trip Index Item Container**
  - Trip Index Item Photo
  - Trip Details Container
    - Trip Name
    - Trip Location
    - Description


## Routes
|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/userId" | "UserProfileContainer" |
| "/userId/map" | "UserMapContainer" |
| "/userId/saved-trips" | "SavedTripsContainer" |
| "/tripId" | "TripIndexItemContainer" |
| "userId/new-trip" | "NewTripContainer" |
