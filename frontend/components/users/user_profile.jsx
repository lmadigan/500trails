import React from 'react';
var Masonry = require('react-masonry-component');
import { withRouter, Link } from 'react-router';
import Modal from 'react-modal';
import { customStyles } from './modal_style';
import TripIndexItem from '../trips/trip_index_item';
import { merge } from 'lodash';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.userTrips = this.userTrips.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._onModalClose = this._onModalClose.bind(this);
    this.state = {
      user: "",
      modalOpen: false,
      trip: {}
    };
  }

  componentWillMount() {
    this.props.fetchUser(this.props.userId);
  }

  _onModalClose() {
    this.setState({modalOpen: false });
    customStyles.content.opacity = 0;
  }

  onModalOpen() {
    customStyles.content.opacity = 100;
  }

  _handleClick(trip) {
    this.setState({ modalOpen: true });
    this.setState({trip: trip});
  }

  userTrips() {
    const userPics = this.props.trips.map(function(trip, idx){
      return (
        <div className="image-element-class" key={idx} >
          <img onClick={() => this._handleClick(trip)} src={trip.images[0].image_url} />
        </div>
      );
    }, this);

    return (
      <div className="masonry-conatiner">
        <Masonry className='image-masonry' elementType={'div'}
           fitWidth='true'>
          {userPics}
        </Masonry>
      </div>

    );
  }

  render() {
    let userTrips = (this.props.user.images === undefined ) ?  "" : this.userTrips() ;
    return (
      <div className="user-profile-container">

        <div className="background-photo-container">
            <img src={this.props.user.background_photo} />
            </div>

        <div className="scroll-div">
          <div className="user-header-container">
            <section className="user-navatar-container">
              <div className="user-navatar">
                <img src= {this.props.user.thumbnail} />
              </div>

            </section>
            <section className="user-info">
                <h1>USER PAGe!</h1>
            </section>
          </div>
          <div className="user-nav-bar-container">
            <nav className="user-nav">
              <ul className="nav-elements">
                <li>
                  TRIPS
                </li>
                <li>
                  SAVED TRIPS
                </li>
              </ul>
            </nav>
          </div>
          <div className="users-trips">
            {userTrips}
          </div>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._onModalClose}
          onAfterOpen={this.onModalOpen}
          contentLabel="Modal"
          style={customStyles}>

          <TripIndexItem
              fetchTrip={this.props.fetchTrip}
              currentUser={this.props.currentUser}
              user={this.props.user}
              trip={this.state.trip}/>
          </Modal>

      </div>
    );
  }
}

export default withRouter(UserProfile);
