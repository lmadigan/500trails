import React from 'react';
import { Link } from 'react-router';
import {merge } from 'lodash';

class TripIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({title: "",
      description: "",
      location: "",
      user_id: "",
      image_url: ""}, this.props.trip);

  }

  componentWillMount() {
    this.props.fetchTrip(this.props.params.tripId)
      .then(() => this.setState(merge({title: "",
        description: "",
        user_id: ""}, this.props.trip)));
  }

  deleteTrip() {
    this.props.deleteTrip(this.props.tripId);
  }

  deleteButton() {
    if (this.props.currentUser !== null &&
      this.props.currentUser.id === this.state.user_id) {
        return (
          <div className="trip-index-item-box">
            <div className="delte-button-box">
              <button className="delete-button">Delete Trip</button>
            </div>
          </div>
        );
      } else {
        return (
          <div></div>
        );
      }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    const deleteButton =  this.deleteButton();
      return (
        <div className="trip-index-item-container">
          <section className="trip-index-item-wrapper">
            <div className="trip-index-item-photo-wrapper">
              <img src={this.state.image_url}/>
            </div>
            <div className="trip-index-item-details">
              <div className="trip-index-item-writing">
                <div className="trip-index-item-box">
                  <div className="trip-index-item-user">
                    User Info Goes Here
                  </div>
                </div>
                <div className="trip-index-item-box">
                  <div className="trip-index-item-title">
                    <h1>{this.state.title}</h1>
                  </div>
                </div>
                <div className="trip-index-item-box">
                  <div className="trip-location">LOCATION</div>
                  </div>
                <div className="trip-index-item-box">
                  <div className="trip-index-item-description">
                    <h1>{this.state.description}</h1>
                  </div>
                </div>
                {deleteButton}
              </div>
            </div>
          </section>
          </div>


      );
  }
}

export default TripIndexItem;
