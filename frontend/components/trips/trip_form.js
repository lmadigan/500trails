import React from 'react';
import { withRouter } from 'react-router';
import TripImages from './trip_image_form';
import { merge } from 'lodash';
import Modal from 'react-modal';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      user_id: '',
      image_url: '',
      tripForm: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }


  redirectToUserProfile() {
    this.props.router.push(`/users/${this.props.currentUser.id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    let userTrip = {trip: { title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      user_id: this.props.currentUser.id,
      image_url: this.state.image_url
        }};
    this.props.createTrip(userTrip);
    this.props.closeModal();
    this.redirectToUserProfile();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }


uploadPhoto(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        let url = results[0].url;
        this.setState({image_url: url});
        this.setState({tripForm: true});

      }
    }.bind(this));

  }

  tripInfo() {
    return(
      <div className="trip-form-input-area">
        <div className="input-type">
          <button className="create-trip-button">Create Trip</button>
        </div>
        <br/>
        <div className="input-type">
          <label className="trip-label">
            Title:
          </label>
          <br/>
          <input
            className="trip-label-input"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </div>
        <div className="input-type">
          <label className="trip-label">
            Location:
          </label>
          <br/>
          <input
            className="trip-label-input"
            type="text"
            value={this.state.location}
            placeholder="Where was the photo taken?"
            onChange={this.update('location')}
            />
        </div>
        <div className="input-type">
          <label className="trip-label">
            Description:
          </label>
          <br/>
          <input
            className="description-label-input"
            type="text"
            value={this.state.description}
            placeholder="Tell us more about your trip!"
            onChange={this.update('description')}
            />
        </div>
      </div>
    );
  }

  photoContainer() {
    return (
      <div className="trip-form-photo-area">
        <div className="photo-upload">
          <img src={this.state.image_url} />
          </div>
        </div>
    );
  }

  photoUpLoad() {
    return (
      <div className="trip-form-photo-upload">
        <div className="photo-upload-form">
          <button onClick={this.uploadPhoto}>Browse Photos</button>
        </div>
      </div>
    );
  }

	render() {
    console.log(this.state);
    console.log(this.props);
    let showTripForm = (this.state.tripForm) ? this.tripInfo() : "";
    let photo = (this.state.image_url === '') ? this.photoUpLoad() : this.photoContainer() ;
    console.log(this.props);
    return (
      <section className="new-trip-form-container">
        {this.errors()}
        <form className="trip-form" onSubmit={this.handleSubmit}>
          {photo}
          {showTripForm}
      </form>
      </section>
    );
	}
}

export default withRouter(TripForm);
