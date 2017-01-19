import React from 'react';
import { Link } from 'react-router';
import {merge } from 'lodash';

class TripIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTrip = this.deleteTrip.bind(this);
  }

    imageButtonSection() {
      const deleteButton =  this.deleteButton();
      return (
        <nav className="image-buttons-container">
          <ul>
            <li className="link-to-user">
              HIIIIIIIII
            </li>
            <li className="link-delete">
              {deleteButton}
            </li>
          </ul>
        </nav>
      );
    }

    deleteTrip() {
      const tripId = this.props.trip.id;
      this.props.deleteTrip(tripId);
    }

    deleteButton() {
      if (this.props.currentUser !== null &&
        this.props.currentUser.id === this.props.user.id) {
          return (
            <div>
              <button
                onClick={this.deleteTrip}>Delete Trip</button>
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
                      <h1>{this.props.trip.title}</h1>
                    </div>
                  </div>
                  <div className="trip-index-item-box">
                    <div className="trip-location">{this.props.trip.location}</div>
                  </div>
                  <div className="trip-index-item-box">
                    <div className="trip-index-item-description">
                      <h1>{this.props.trip.description}</h1>
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
