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
      <nav className="right-nav">
        <ul>
          <li><Link to="/demo">DEMO</Link></li>
          <li><Link to="/login">LOG IN</Link></li>
          <li className="sign-up-button"><Link to="/signup">SIGN UP!</Link></li>
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
            <li>500Trails</li>
            <li>Discover</li>
            <li>Loations</li>
          </ul>
        </nav>
          {personalGreeting}
      </header>
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
