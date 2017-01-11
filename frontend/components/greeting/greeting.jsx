import React from 'react';
import { Link } from 'react-router';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks.bind(this);
    this.personalGreeting.bind(this);
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to="/demo" activeClassName="current"><button>Demo</button></Link>
        <Link to="/login" activeClassName="current"><button>Log In</button></Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current"><button>Sign Up!</button></Link>
      </nav>
    );
  }

  personalGreeting() {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">{this.props.currentUser.user_name}</h2>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
        <button>Add Trip</button>
      </hgroup>
    );
  }

  render () {
    let personalGreeting = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
    return (
      <div className="top-nav-header">
        <div className="top-nav-header-items">
          <div className="F00trails-nav-header">
            <ul>
              <li>Trails</li>
              <li>Discover</li>
              <li>Loations</li>
            </ul>
          </div>
          <div className="personal-greeting">
            {personalGreeting}
          </div>
        </div>
      </div>
    );
  }
}


//   personalGreeting(currentUser, logout) {
//     return (
//       <hgroup className="header-group">
//         <h2 className="header-name">Hi, {currentUser.user_name}!</h2>
//         <button className="header-button" onClick={logout}>Log Out</button>
//       </hgroup>
//     )
//   }
// const Greeting = ({currentUser, logout}) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );
//
// export default Greeting;
