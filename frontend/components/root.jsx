import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import Splash from './splash/splash';
import TripIndexItemContainer from './trips/trip_index_item_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={Splash}/>
        <Route path="login" component={ SessionFormContainer } />
        <Route path="signup" component={ SessionFormContainer } />
        <Route path="trips/:tripId" component={TripIndexItemContainer}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
