import React from 'react';
var Masonry = require('react-masonry-component');
import { withRouter, Link } from 'react-router';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.userTrips = this.userTrips.bind(this);
    this.state = {
      user: ""
    };
  }

  componentWillMount() {
    this.props.fetchUser(this.props.userId);
  }

  userTrips() {
    const userPics = this.props.user.images.map(function(image, idx){
      return (
        <div className="image-element-class" key={idx} >
          <Link to={`/trips/${image.trip_id}`}>
            <img src={image.image_url} />
          </Link>
        </div>
      );
    });

    return (
      <div className="masonry-conatiner">
        <Masonry className='image-masonry' elementType={'div'}
           fitWidth='true'>
          {userPics}
        </Masonry>
      </div>

    );
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    let userTrips = (this.props.user.images === undefined ) ?  "" : this.userTrips() ;
    return (
      <div className="user-profile-container">

        <div className="background-photo-container">
            <img src={this.props.user.background_photo} />
            </div>

        <div className="scroll-div">
          <div className="user-header-container">
            <section className="user-navatar-container">
              <div className="user-navatar">
                <img src= {this.props.user.thumbnail} />
              </div>

            </section>
            <section className="user-info">
                <h1>USER PAGe!</h1>
            </section>
          </div>
          <div className="user-nav-bar-container">
            <nav className="user-nav">
              <ul className="nav-elements">
                <li>
                  TRIPS
                </li>
                <li>
                  SAVED TRIPS
                </li>
              </ul>
            </nav>
          </div>
          <div className="users-trips">
            {userTrips}
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(UserProfile);


// style={ {background: "url(" + this.props.user.background_photo + ")" } }
