import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { customStyles } from '../users/modal_style';
import TripIndexItem from '../trips/trip_index_item';
var classNames = require('classnames');




class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.itemsList = this.itemsList.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._onModalClose = this._onModalClose.bind(this);
    this.saveTrip = this.saveTrip.bind(this);
    this.alreadySaved = this.alreadySaved.bind(this);
    this.locationMarker = this.locationMarker.bind(this);
    this.deleteSave = this.deleteSave.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrips();
  }



  _onModalClose() {
    this.setState({modalOpen: false });
    customStyles.content.opacity = 0;
  }

  onModalOpen() {
    customStyles.content.opacity = 100;
  }

  _handleClick(trip) {

    this.setState({user: trip.user}) ;
    this.setState({trip: trip});
    this.setState({tripId: trip.id});
    this.setState({ modalOpen: true });
  }

  saveTrip(trip) {
    this.props.createLike(trip.id);
  }

  deleteSave(trip) {
    this.props.deleteLike(trip.id);
  }

  alreadySaved(trip) {
    let savedTrips = this.props.currentUser.liked_trips ;
    for ( let i = 0; i < savedTrips.length; i++ ) {
      if ( trip.id === savedTrips[i].id ) {
        return true ;
      }
    }
    return false ;
  }

  handleIconClick(trip) {
    if ( this.alreadySaved(trip) ) {
      this.deleteSave(trip);
    } else {
      this.saveTrip(trip);
    }
  }

  locationMarker(trip) {

    let save =  this.alreadySaved(trip)  ? ' saved-place-icon' : '';
    var liClasses = `fa fa-road fa-lg${save}`;
   return (
     <div onClick={() => this.handleIconClick(trip)} className="road-icon">
       <i className={liClasses}  aria-hidden="true"></i>
     </div>
   );

  }


  itemsList() {
    let location = this.locationMarker ;
    return this.props.feedTrips.map(function(trip, idx){
      let road = location(trip);
      return (
        <div className="feed-item-div" key={idx}>
          <img onClick={() => this._handleClick(trip)}
            src={trip.images[0].image_url} />
          <section className="photo-info-group">
            <section className="feed-item-div-title">
              <h1>{trip.title}</h1>
              {road}
            </section>
            <section className="feed-item-div-location">
              <div className="location-marker">
                  <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
              </div>
              <h1>{trip.location}</h1>
            </section>
            <section>

            </section>
          </section>
        </div>
      );
    }, this);
  }

  render () {
    console.log(this.props);
    let items = (this.props.feedTrips[0] === undefined) ? "" : this.itemsList();
    return (
      <section className="home-feed-container">
        <section className="home-feed-items">
          {items}
        </section>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._onModalClose}
          onAfterOpen={this.onModalOpen}
          contentLabel="Modal"
          style={customStyles}>

          <TripIndexItem
              updateTrip={this.props.updateTrip}
              fetchTrip={this.props.fetchTrip}
              deleteTrip={this.props.deleteTrip}
              currentUser={this.props.currentUser}
              user={this.state.user}
              trip={this.state.trip}/>
          </Modal>

      </section>
    );
  }
}

export default withRouter(HomeFeed);
