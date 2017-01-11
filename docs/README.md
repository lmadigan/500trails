# 500trails

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://trails500.herokuapp.com
[trello]: https://trello.com/b/SeQI1hwv/500trails

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
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Trip Model, API, and components (3 days)

**Objective:** Trips can be created, updated, destroyed through the API. Includes
saved trips. This includes photo upload for trips using Cloudinary.

###Phase 3: Creating User Profile Page And Splash Page (2 day)

**Objective:** User profile page includes user's trips and saved trips.

###Phase 5: Creating User Home Feed Page (2 days)

**Objective:** Functioning homepage with a discover section seeded with
  photos linked to exciting trips. Includes trips user has saved, as well as suggested ones.


### Bonus Features (TBD)
- [ ] Google Map containing locations of user's trips
- [ ] Search Trip By Location
- [ ] Multiple Photo Upload for trips
- [ ] Drag and Drop Photo Upload
