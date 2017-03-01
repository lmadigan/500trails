import React from 'react';
var Masonry = require('react-masonry-component');
import { withRouter, Link } from 'react-router';
import Modal from 'react-modal';
import { customStyles } from './modal_style';
import TripIndexItem from '../trips/trip_index_item';
import MapContainer from '../map/map';
import { merge } from 'lodash';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._onModalClose = this._onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.showTrips = this.showTrips.bind(this);
    this.tripsToShow = this.tripsToShow.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.state = {
      user: {},
      modalOpen: false,
      trip: {},
      tripId: ""
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.fetchUser(nextProps.userId);
    }
  }

  _onModalClose() {
    this.setState({modalOpen: false });
    customStyles.content.opacity = 0;
  }

  onModalOpen() {
    customStyles.content.opacity = 100;
  }


  _handleClick(trip) {
    const trips = this.props.trips[this.props.trips.length-1];
    if (trips === "saved") {
      this.setState({user: trip.user}) ;
    } else {
      this.setState({user: this.props.user}) ;
    }
    this.setState({ modalOpen: true });
    this.setState({trip: trip});
    this.setState({tripId: trip.id});
  }


  tripsToShow() {
    const trip = this.props.trips[this.props.trips.length-1];
    return this.showTrips(trip);
  }

  showTrips(trips) {
    let tripPhotos = "";
    if (trips === "map") {
      return this.renderMap() ;
    } else if (trips === "trips"){
      tripPhotos = this.props.user.trips ;
    } else if (trips === "saved") {
      tripPhotos = this.props.user.liked_trips ;
    }

    const userPics = tripPhotos.map(function(trip, idx){
      return (
        <div className="image-element-class" key={idx} >
          <img onClick={() => this._handleClick(trip)} src={trip.images[0].image_url} />
        </div>
      );
    }, this);

    return (
      <div className="masonry-container">
        <Masonry  elementType={'div'}
           options={{isFitWidth: true}}
            className={'image-masonry'}>
          {userPics}
        </Masonry>
      </div>
    );
  }

  renderMap(){
    return (
      <div className="masonry-container">
        <MapContainer trips={this.props.user.trips}
          currentUser={this.props.currentUser}
          user={this.props.user}/>
      </div>
    );
  }

  render() {
    console.log(this.props);
    let background = this.props.user.background_photo;
    if (!this.props.user.background_photo) {
      background = "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484954059/500trails/homer_tunel_fiorland.jpg";
    }
    let thumbnail = this.props.user.thumbnail;

    if ( !this.props.user.thumbnail) {
      thumbnail = "http://res.cloudinary.com/dtnwzbeum/image/upload/v1484812938/500trails/jxwzosxc7ka-jonas-verstuyft.jpg";
    }

    let userTrips = (this.props.user.images === undefined ) ?  "" : this.tripsToShow() ;
    return (
      <div className="user-profile-container">

        <div className="background-photo-container">
            <img src={background}/>
            </div>

        <div className="scroll-div">
          <div className="user-header-container">
            <section className="user-navatar-container">
              <div className="user-navatar">
                <img src={thumbnail}/>
              </div>

            </section>
            <div className="user-info-container">
              <div className="user-info">
                {this.props.user.user_name}
              </div>
            </div>
          </div>
          <div className="user-nav-bar-container">
            <nav className="user-nav">
              <ul className="nav-elements">
                <li>
                  <Link className="trips-link" to={`/users/${this.props.user.id}/trips`}>TRIPS</Link>
                </li>
                <li>
                  <Link className="saved-trips-link" to={`/users/${this.props.user.id}/saved`}>SAVED TRIPS</Link>
                </li>
                <li>
                  <Link className="saved-trips-link" to={`/users/${this.props.user.id}/map`}>MAP</Link>
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
            router ={this.props.router}
              fetchTrip={this.props.fetchTrip}
              deleteTrip={this.props.deleteTrip}
              updateTrip={this.props.updateTrip}
              currentUser={this.props.currentUser}
              user={this.state.user}
              trip={this.state.trip}
              closeModal={this._onModalClose}/>
          </Modal>

      </div>
    );
  }
}

export default withRouter(UserProfile);
