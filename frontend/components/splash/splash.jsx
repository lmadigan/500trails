import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    };
  }

  render() {
    return (
      <div className="splash-container-photo">
        <div className="splash-photo-writing">
          <h1 className="splash-photo-h1" >Home to everyone's favorite places</h1>
        </div>
      </div>
    );
  }
}
