import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class TripImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        image_url: "",
        trip_id: ""
      }
    };
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
    if(!error){
      console.log(results);

    }
  });
}

  render() {
    return (
      <div className="photo-upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
}

export default TripImages;


// this.props.createImage(results[0])
