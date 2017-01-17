import React from 'react';
var Masonry = require('react-masonry-component');
import { withRouter } from 'react-router';

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
          <img src={image.image_url} />
        </div>
      );
    });

    return (
      <Masonry className='image-masonry' elementType={'div'}
        columnWidth='image-element-class' percentPosition='true'>
        {userPics}
      </Masonry>
    );
  }

  render() {
    console.log(this.props);
    let userTrips = (this.props.user.images === undefined ) ?  "" : this.userTrips() ;
    return (
      <div className="user-profile-container">
        <div className="user-name">
          <h1>USER PAGe!</h1>
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
    );
  }
}

export default withRouter(UserProfile);
