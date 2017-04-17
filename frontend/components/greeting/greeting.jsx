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
    this.renderErrorMessages = this.renderErrorMessages.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
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
    this.props.router.push(`users/2/trips`);
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
          <li className="header-name"><Link className="header-name" to={`/users/${this.props.currentUser.id}/trips`}>{this.props.currentUser.user_name}</Link></li>
          <li><button className="header-button" onClick={this.logoutAndRedirect}>LOG OUT</button></li>
          <li><button onClick={this._handleClick}>ADD TRIP</button></li>
        </ul>

      </nav>
    );
  }


  clearErrors(){
    // defer the execution of anonymous function for
    // 3 seconds and go to next line of code.
    let errorHandle = this.props.clearTripErrors;
    setTimeout(function(){
        errorHandle();
    }, 6000);
  }

  renderErrorMessages() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, ind) => (
            <li key={`error-${ind}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render () {
    let errors = this.props.errors ? this.renderErrorMessages() : "";
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
      <div>
        <header className="top-nav-header">
          <nav className="left-nav">
            <ul className="F00trails-nav-header">
              <li><Link className="link500"to="/">500TRAILS</Link></li>
              <li><Link className="discover"to="/discover">DISCOVER</Link></li>
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
                  closeModal={this._onModalClose}
                  clearErrors={this.props.clearTripErrors}/>
            <br/>
            </Modal>

        </header>
        {errors}
      </div>

    );
  }
}

export default withRouter(Greeting);
