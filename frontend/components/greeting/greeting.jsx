import React from 'react';
import { Link } from 'react-router';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks.bind(this);
    this.personalGreeting.bind(this);
    this.state = {
        user_name: "guest",
        password: "password123"
    };
  }

  loginGuest() {
    const user = Object.assign({}, this.state);
    this.props.login({user});
  }

  sessionLinks() {
    return (
      <nav className="right-nav">
        <ul>
          <li><button className="demo-button"
              onClick={() => this.loginGuest()}>DEMO</button></li>
          <li><Link to="/login">LOG IN</Link></li>
          <li className="sign-up-button"><Link to="/signup">SIGN UP</Link></li>
        </ul>
      </nav>
    );
  }

  personalGreeting() {
    return (
      <nav className="right-nav">
        <ul>
          <li className="header-name">{this.props.currentUser.user_name}</li>
          <li><button className="header-button" onClick={this.props.logout}>Log Out</button></li>
          <li><button>Add Trip</button></li>
        </ul>

      </nav>
    );
  }

  render () {
    let personalGreeting = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
    return (
      <header className="top-nav-header">
        <nav className="left-nav">
          <ul className="F00trails-nav-header">
            <li><Link to="/">500Trails</Link></li>
            <li>DISCOVER</li>
            <li>LOCATION</li>
          </ul>
        </nav>
          {personalGreeting}
      </header>
    );
  }
}
