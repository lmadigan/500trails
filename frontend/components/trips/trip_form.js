import React from 'react';
import { withRouter } from 'react-router';
import TripImages from './trip_image_form';
import { merge } from 'lodash';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/lmadigan/upload';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      lat: '',
      lng: '',
      user_id: '',
      image_url: '',
      tripForm: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
    // this.parseLat = this.parseLat.bind(this);
    // this.parseLong = this.parseLong.bind(this);
    // this.findLocation = this.findLocation.bind(this);
    this.onChange = (address) => this.setState({ location: address });
  }

  componentDidMount() {
    this.clearErrors();
  }

  redirectToUserProfile() {
    this.props.router.push(`/users/${this.props.currentUser.id}/trips`);
  }

  onChange(address) {

  }

  handleSubmit(e) {
    e.preventDefault();
    let latLng;
    let that = this;
    geocodeByAddress(this.state.location,  (err, latLng) => {

        console.log(`latitude and longitude for ${this.state.location}`, latLng);
        // this.setState({lat: latLng.lat});
        // this.setState({long: latLng.lng});
        debugger
        let userTrip = {trip: { title: this.state.title,
          description: this.state.description,
          location: this.state.location,
          user_id: this.props.currentUser.id,
          image_url: this.state.image_url,
          lat: latLng.lat,
          long: latLng.lng
            }};
        that.props.createTrip(userTrip);
        that.props.closeModal();
        that.redirectToUserProfile();
      });

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

  clearErrors(){
    // defer the execution of anonymous function for
    // 3 seconds and go to next line of code.
    let errorHandle = this.props.clearErrors;
    setTimeout(function(){
        errorHandle();
    }, 6000);
  }

  uploadPhoto(files) {
    this.handleImageUpload(files[0]);
  }

  // findLocation() {
  //   var geocoder = new google.maps.Geocoder;
  //   let latlng = new google.maps.LatLng({lat: this.state.lat, lng: this.state.lng});
  //   console.log(latlng);
  //   let that = this;
  //   geocoder.geocode({'location': latlng}, function(results, status) {
  //     if (status === 'OK') {
  //       if (results[1]) {
  //         location = results[1].formatted_address;
  //         that.setState({location: location})
  //         console.log(location);
  //       } else {
  //         // alert('No results found');
  //       }
  //     } else {
  //       // alert('Geocoder failed due to: ' + status);
  //     }
  //   });
  // }


  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_OPTIONS.upload_preset)
    .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        console.log(response);
        this.setState({
          image_url: response.body.secure_url});
        this.setState({tripForm: true});
        // this.parseLat(response.body.image_metadata.GPSLatitude);
        // this.parseLong(response.body.image_metadata.GPSLongitude);
        // console.log(this.state.lat);
        // this.findLocation();
      }
    });
  }

  tripInfo() {

  const inputProps = {
    value: this.state.location,
    onChange: this.onChange
    };

    let locationPlaceHolder = (this.state.location !== "") ? this.state.location : "Where was the photo taken?" ;
    return(
      <div className="trip-form-input-area">
        <div className="inner-trip-form-area">
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
              required
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
               required
               type="text"
               value={this.state.location}
               placeholder={locationPlaceHolder}
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
              required
              type="text"
              value={this.state.description}
              placeholder="Tell us more about your trip!"
              onChange={this.update('description')}
              />
          </div>

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
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.uploadPhoto.bind(this)}>

          </Dropzone>
          <p className="new-pin-image-text">Drop an image or click to select a file.</p>
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

// tripInfo() {
//   const inputProps = {
//     value: this.state.address,
//     onChange: this.onChange,
//     };
//   let locationPlaceHolder = (this.state.location !== "") ? this.state.location : "Where was the photo taken?" ;
//   return(
//     <div className="trip-form-input-area">
//       <div className="inner-trip-form-area">
//         <div className="input-type">
//           <button className="create-trip-button">Create Trip</button>
//         </div>
//         <br/>
//         <div className="input-type">
//           <label className="trip-label">
//             Title:
//           </label>
//           <br/>
//           <input
//             className="trip-label-input"
//             required
//             type="text"
//             value={this.state.title}
//             onChange={this.update('title')}
//           />
//         </div>
//         <div className="input-type">
//           <label className="trip-label">
//             Location:
//           </label>
//           <br/>
//           <input
//             className="trip-label-input"
//             required
//             type="text"
//             value={this.state.location}
//             placeholder={locationPlaceHolder}
//             onChange={this.update('location')}
//             />
//         </div>
//         <div className="input-type">
//           <label className="trip-label">
//             Description:
//           </label>
//           <br/>
//           <input
//             className="description-label-input"
//             required
//             type="text"
//             value={this.state.description}
//             placeholder="Tell us more about your trip!"
//             onChange={this.update('description')}
//             />
//         </div>
//
//       </div>
//     </div>
//   );
// }

//
//
// parseLat(lat){
//   let res = lat.split(" ");
//   let seconds = res[3];
//   seconds = seconds.split(".");
//   let s = parseFloat(seconds[0]);
//   let min = parseFloat(res[2]);
//   let deg = parseFloat(res[0]);
//    min = min + (s / 60.0);
//    deg = deg + (min / 60.0);
//    if (res[4] === "S") {
//      deg = (0.0 - deg);
//    }
//   this.setState({
//     lat: deg
//   });
// }
//
// parseLong(long){
//   let res = long.split(" ");
//   let seconds = res[3];
//   seconds = seconds.split(".");
//   let s = parseFloat(seconds[0]);
//   let min = parseFloat(res[2]);
//   let deg = parseFloat(res[0]);
//    min = min + (s / 60.0);
//    deg = deg + (min / 60.0);
//    if (res[4] === "W") {
//      deg = (0.0 - deg);
//    }
//    console.log(res[4] === "W");
//    console.log(res[4]);
//    console.log(deg);
//   this.setState({
//     lng: deg
//   });
// }
//
// uploadPhoto(files) {
//   this.handleImageUpload(files[0]);
// }
//
// findLocation() {
//   var geocoder = new google.maps.Geocoder;
//   let latlng = new google.maps.LatLng({lat: this.state.lat, lng: this.state.lng});
//   console.log(latlng);
//   let that = this;
//   geocoder.geocode({'location': latlng}, function(results, status) {
//     if (status === 'OK') {
//       if (results[1]) {
//         location = results[1].formatted_address;
//         that.setState({location: location})
//         console.log(location);
//       } else {
//         // alert('No results found');
//       }
//     } else {
//       // alert('Geocoder failed due to: ' + status);
//     }
//   });
// }


// handleImageUpload(file) {
//   let upload = request.post(CLOUDINARY_UPLOAD_URL)
//   .field('upload_preset', CLOUDINARY_OPTIONS.upload_preset)
//   .field('file', file);
//
//   upload.end((err, response) => {
//     if (err) {
//       console.log(err);
//     }
//
//     if (response.body.secure_url !== '') {
//       console.log(response);
//       this.setState({
//         image_url: response.body.secure_url});
//       this.setState({tripForm: true});
//       this.parseLat(response.body.image_metadata.GPSLatitude);
//       this.parseLong(response.body.image_metadata.GPSLongitude);
//       console.log(this.state.lat);
//       this.findLocation();
//     }
//   });
// }
