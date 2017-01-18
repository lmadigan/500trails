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
      images: [],
      user: {}
    }, this.props.trip);

  }

  componentWillReceiveProps() {
    debugger
    this.props.fetchTrip(this.props.tripId)
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
        this.props.currentUser.id === this.props.user.user_id) {
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
        console.log(this.state);
        console.log(this.props);
        let image = (this.props.trip) ? this.props.trip.images[0].image_url : "";
        const imageButtons = this.imageButtonSection();
        return (
          <section className="trip-index-item-wrapper">
            <div className="trip-index-item-photo-wrapper">
              <img src={image}/>
            </div>
            <div className="trip-index-item-details">

              <div className="trip-index-item-writing">

                <div>
                  <div className="trip-index-item-box">
                    <section className="user-navatar-container">
                      <div className="user-navatar">
                        <img src= {this.props.user.thumbnail} />
                      </div>
                    </section>
                    <div className="trip-index-item-user">
                      <h1>
                        {this.props.user.user_name}
                      </h1>
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
        );
      }
    }

    export default TripIndexItem;



    // <Link to={`/users/${this.state.user_id}`}>
    //   Back to User Page
    // </Link>
