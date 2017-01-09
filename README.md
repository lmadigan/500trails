# 500trails

[Heroku link] **Note:** This should be a link to your production site

[Trello link][trello]

[heroku]:
[trello]:

## Minimum Viable Product

500trails is a web application inspired by 500px built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Home Feed
- [ ] Photo Upload for New Trips
- [ ] User Profile Page
- [ ] Save other Users' Trips (follows)
- [ ] Google Map containing locations of user's trips
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Trip Model, API, and components (2 days)

**Objective:** Trips can be created, updated, destroyed through the API. Includes
saved trips.

## Phase 3: Photo Upload and storage using Cloudinary (2 days)

**Objective:** Know how to use Cloudinary to store and retrieve images, as well
  as extract location data

##Phase 4: Creating User Profile Page (1 day)

**Objective:** User profile page includes user's trips and saved trips.

##Phase 5: Creating Home Page (1 days)

**Objective:** Functioning homepage with a discover section seeded with
  photos linked to exciting trips. Header based on whether viewer is signed in or not.

##Phase 6: Implementing Google Map (1 day)

**Objective:** Add a google map to the homepage and the user's profile
  page to show where trips have been


### Bonus Features (TBD)
- [ ] Search Trip By Location
- [ ] Multiple Photo Upload for trips
- [ ] Drag and Drop Photo Upload
