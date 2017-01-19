import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { customStyles } from './modal_style';
import TripForm from '../trips/trip_form';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks.bind(this);
    this.personalGreeting.bind(this);
    this.signupLink.bind(this);
    this.loginLink.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._onModalClose = this._onModalClose.bind(this);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.state = {
      guest: {
        user_name: "guest",
        password: "password123"
      },
      modalOpen: false
      // newTrip: false
    };
  }

  _handleClick(form) {
    this.setState({ modalOpen: true });
  }

  _onModalClose() {
    this.setState({modalOpen: false });
    customStyles.content.opacity = 0;
  }

  onModalOpen() {
    customStyles.content.opacity = 100;
  }

  loginGuest() {
    const user = Object.assign({}, this.state.guest);
    this.props.login({user});
    this.props.router.push(`users/2`);
  }

  sessionLinks() {
    return (
      <nav className="right-nav">
        <ul>
          <li><button className="demo-button"
              onClick={() => this.loginGuest()}>DEMO</button></li>
            <li className="login-button"><Link className="login-link" to="/login">LOG IN</Link></li>
          <li className="sign-up-button"><Link className="signup-link" to="/signup">SIGN UP</Link></li>
        </ul>
      </nav>
    );
  }
  loginLink() {
    return (
      <nav className="right-nav">
        <ul>
          <li><button className="demo-button"
              onClick={() => this.loginGuest()}>DEMO</button></li>
            <li className="login-button"><Link className="login-link" to="/login">LOG IN</Link></li>
        </ul>
      </nav>
    );
  }

  signupLink() {
    return (
      <nav className="right-nav">
        <ul>
          <li><button className="demo-button"
              onClick={() => this.loginGuest()}>DEMO</button></li>
          <li className="sign-up-button"><Link className="signup-link" to="/signup">SIGN UP</Link></li>
        </ul>
      </nav>
    );
  }
  logoutAndRedirect() {
    this.props.logout();
    this.props.router.push('/');
  }

  personalGreeting() {
    return (
      <nav className="right-nav">
        <ul>
          <li className="header-name">{this.props.currentUser.user_name}</li>
          <li><button className="header-button" onClick={this.logoutAndRedirect}>LOG OUT</button></li>
          <li><button onClick={this._handleClick}>ADD TRIP</button></li>
        </ul>

      </nav>
    );
  }

  render () {

    let personalGreeting = "";
    if ( this.props.currentUser ) {
      personalGreeting = this.personalGreeting();
    } else if (this.props.location.pathname === "/login") {
      personalGreeting = this.signupLink();
    } else if (this.props.location.pathname === "/signup") {
      personalGreeting = this.loginLink();
    } else {
      personalGreeting = this.sessionLinks();
    }

    return (
      <header className="top-nav-header">
        <nav className="left-nav">
          <ul className="F00trails-nav-header">
            <li><Link className="link500"to="/">500TRAILS</Link></li>
            <li>DISCOVER</li>
            <li>LOCATION</li>
          </ul>
        </nav>
          {personalGreeting}
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this._onModalClose}
            style={customStyles}
            onAfterOpen={this.onModalOpen}
            contentLabel="Modal">
            <TripForm currentUser={this.props.currentUser}
                createTrip={this.props.createTrip}
                closeModal={this._onModalClose}/>
          <br/>
          </Modal>
      </header>
    );
  }
}

export default withRouter(Greeting);


// <button onClick={this._onModalClose}>CLOSE</button>
