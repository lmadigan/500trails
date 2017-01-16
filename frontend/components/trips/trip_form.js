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
  }

  handleSubmit(e) {
    e.preventDefault();
    let userTrip = {trip: { title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      user_id: this.props.currentUser.id,
        }};
    let image = { image: {image_url: this.state.image_url}};
    const trip = merge({}, userTrip, image);
    this.props.createTrip({trip});
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
        this.setState({"image_url": url});
        this.setState({tripForm: true});

      }
    }.bind(this));

  }

  tripInfo() {
    return(
      <div className="trip-form-input-area">
        <div className="input-type">
          <input
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update('title')}
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            value={this.state.location}
            placeholder="Location"
            onChange={this.update('location')}
            />
        </div>
        <div className="input-type">
          <input
            type="text"
            value={this.state.description}
            placeholder="Description"
            onChange={this.update('description')}
            />
        </div>
        <div className="input-type">
          <button className="create-trip-button">Create Trip</button>
        </div>
      </div>
    );
  }

  photoContainer() {
    return (
      <div className="trip-form-photo-area">
        <div className="photo-upload-form">
          <img src={this.state.image_url} />
          </div>
        </div>
    );
  }

  photoUpLoad() {
    return (
      <div className="trip-form-photo-area">
        <div className="photo-upload-form">
          <button onClick={this.uploadPhoto}>Browse Photos</button>
        </div>
      </div>
    );
  }

	render() {
    let showTripForm = (this.state.tripForm) ? this.tripInfo() : "";
    let photo = (this.state.image_url === '') ? this.photoUpLoad() : this.photoContainer() ;
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

  // const trip = Object.assign({}, this.state, {trip: { user_id: this.props.currentUser.id } });
