import React from 'react';
import Modal from 'react-modal';
import {customStyles} from '../greeting/modal_style';
import { Link } from 'react-router';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const _mapOptions = {
    center: {lat: 35, lng: -30},
     zoom: 2,
     minZoom: 2,
      styles: [
        {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: ''}]
      }, {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      { color: "green"}
    ]
  } ,  {
     featureType: "administrative",
     elementType: "geometry.fill",
     stylers: [
        { visibility: "off" }
     ]
   },
          {
    featureType: "administrative",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
      ]
    },
    {
    featureType: "administrative",
    elementType: "geometry.stroke"
    // stylers: [
    //     { visibility: "off" }
    // ]
  },  {
    featureType: "landscape",
    stylers: [
        {
          // "visibility": "off"
        }
    ]
  },
  {
    featureType: "water",
    stylers: [
        {
            "visibility": "on"
        },
        {
            "lightness": 1
        }, {
          color: 'blue'} ]
  }, {
  featureType: "poi",
  stylers: [{ visibility: "off" }]
  } ,
   { featureType: "road",
     stylers: [{ visibility: "off" } ] }
  ]
  };

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      markers: [],
      modalOpen: false,
      currentTrip: ""
    };
    this._onModalClose = this._onModalClose.bind(this);
    this.setMarkers = this.setMarkers.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
}


componentDidMount() {
  const map = this.refs.map;
  this.map = new google.maps.Map(map, _mapOptions);
  if (this.props.trips) {
    this.setMarkers(this.map);
  }
  this.setState({map: this.map});

}

componentDidUpdate() {

}

componentWillMount() {
    Modal.setAppElement('body');
 }


  _onModalClose() {
    this.setState({modalOpen: false });
    customStyles.content.opacity = 0;
  }

  onModalOpen() {
    customStyles.content.opacity = 100;
  }

  setMarkers(map) {
    for(let i=0; i < this.props.trips.length; i++){
      let lat = this.props.trips[i].lat;
      let long = this.props.trips[i].long;
      this.addMarkers(this.props.trips[i], map, lat, long, i);
    }
  }

addMarkers(trip, map, lat, long, i) {
  var markers = [];
  let latLng = new google.maps.LatLng(lat, long)
    var marker = new google.maps.Marker({
       position: latLng,
       map,
       animation: google.maps.Animation.DROP,
       visibile: true
     });

    google.maps.event.addListener(marker, 'click', function() {
      that.setState({modalOpen: true, currentTrip: trip});
    });

    markers.push(marker);
  }



  render() {
    console.log(this.props);

    return (
      <div className="map" ref="map">Map
        <Modal
           isOpen={this.state.modalOpen}
           onRequestClose={this._onModalClose}
           onAfterOpen={this.onModalOpen}
           contentLabel="Modal"
           style={customStyles}>
           <div className="modal-div">
             <div className="inner-modal-div">
               <div className="modal-eth-name">
                 <h1>Modal</h1>
               </div>
               <div>
               </div>
             </div>
           </div>
        </Modal>
      </div>
    );
  }

}

export default Map;
