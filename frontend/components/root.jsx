import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import Splash from './splash/splash';
import TripIndexItemContainer from './trips/trip_index_item_container';
import TripFormContainer from './trips/trip_form_container';
import UserProfileContainer from './users/user_profile_container';
import HomeFeed from './feed/home_feed_container';
import MapContainer from './map/map';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={Splash}/>
        <Route path="login" component={ SessionFormContainer } />
        <Route path="signup" component={ SessionFormContainer } />
        <Route path="trips/new" component={TripFormContainer} />
        <Route path="/discover" component={HomeFeed} />
        <Route path="trips/:tripId" component={TripIndexItemContainer}/>
        <Route path="users/:userId" component={HomeFeed} />
        <Route path="users/:userId/trips" component={UserProfileContainer} />
        <Route path="users/:userId/saved" component={UserProfileContainer} />
        <Route path="users/:userId/map" component={UserProfileContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
