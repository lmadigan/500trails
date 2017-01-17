import {connect} from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';
import { createTrip } from '../../actions/trip_actions';


const mapStateToProps = ({session}) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  createTrip: (trip) => dispatch(createTrip(trip))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
