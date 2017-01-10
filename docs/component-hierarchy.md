## Component Hierarchy

**Auth Form Container**
  - AuthForm

**Splash Container**
  - Discover Container
    - Discover Nav Bar
    - Discover Index

**Header Container**

**User Profile Container**
  - Trips Index

**Home Feed Container**
  - Trips Index
  - Saved Trips Index
  - Suggested Trips Index (bonus)

**New Trip Container**
  - Photo Upload Container
  - New Trip Form

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
| "/"        | "SplashContainer"   |
| "/home"    | "HomeFeedContainer" |
| "/user/userId" | "UserProfileContainer" |
| "/trip/tripId" | "TripIndexItemContainer" |
| "/new-trip" | "NewTripContainer" |
