import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import Splash from './splash/splash';


const App = (props) => (
  <div>
      <GreetingContainer location={props.location}/>
      { props.children }
  </div>
);

export default App;

// <Splash />
