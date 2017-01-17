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
      image_url: "",
      user: {}
      }, this.props.trip);

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

  imageButtonSection() {
    const deleteButton =  this.deleteButton();
    return (
      <nav className="image-buttons-container">
        <ul>
          <li className="link-to-user">
            <Link to={`/users/${this.state.user_id}`}>
              Back to User Page
            </Link>
          </li>
          <li className="link-delete">
            {deleteButton}
          </li>
        </ul>
      </nav>
    );
  }

  deleteButton() {
    if (this.props.currentUser !== null &&
      this.props.currentUser.id === this.state.user_id) {
        return (
            <div className="delete-button-box">
              <button className="delete-button">Delete Trip</button>
            </div>
        );
      } else {
        return (
          <div></div>
        );
      }
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    let image = (this.state.images) ? this.state.images[0].image_url : "";
    const imageButtons = this.imageButtonSection();
      return (
        <section className="trip-index-item-container">
          <section className="trip-index-item-wrapper">
            <div className="trip-index-item-photo-wrapper">
              <img src={image}/>
            </div>
            <div className="trip-index-item-details">

              <div className="trip-index-item-writing">

                <div>
                  <div className="trip-index-item-box">
                    <div className="trip-index-item-user">
                      {this.state.user.user_name}
                    </div>
                  </div>
                  <div className="trip-index-item-box">
                    <div className="trip-index-item-title">
                      <h1>{this.state.title}</h1>
                    </div>
                  </div>
                  <div className="trip-index-item-box">
                    <div className="trip-location">{this.state.location}</div>
                    </div>
                  <div className="trip-index-item-box">
                    <div className="trip-index-item-description">
                      <h1>{this.state.description}</h1>
                    </div>
                  </div>
                </div>

                <div>
                  {imageButtons}
                </div>

              </div>
            </div>
          </section>
        </section>


      );
  }
}

export default TripIndexItem;
