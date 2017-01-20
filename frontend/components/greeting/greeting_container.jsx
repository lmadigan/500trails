import {connect} from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';
import { createTrip, clearTripErrors } from '../../actions/trip_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.trips.errors
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  createTrip: (trip) => dispatch(createTrip(trip)),
  clearTripErrors: () => dispatch(clearTripErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
