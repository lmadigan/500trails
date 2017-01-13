import React from 'react';
import { Link } from 'react-router';
import {merge } from 'lodash';

export default class TripIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({title: "",
      description: "",
      user_id: "",
      image_url: ""}, this.props.trip);

  }

  componentWillMount() {
    this.props.fetchTrip(this.props.params.tripId)
      .then(() => this.setState(merge({title: "",
        description: "",
        user_id: ""}, this.props.trip)));
  }

  render() {
    console.log(this.props);
    console.log(this.state);
      return (
        <div className="trip-index-item-container">
          <section className="trip-index-item-wrapper">
            <div className="trip-index-item-photo-wrapper">
              PHOTO
              <img src={this.state.image_url}/>
            </div>
            <div className="trip-index-item-details">
              <div className="trip-index-item-writing">
                <div className="trip-index-item-user"></div>
                <div className="trip-index-item-title">
                  <h1>{this.state.title}</h1>
                </div>
                <div className="trip-index-item-description">
                  <h1>{this.state.description}</h1>
                </div>
              </div>
            </div>
          </section>
          </div>


      );
  }
}
