import { connect } from 'react-redux';
import { createTrip, createImage } from '../../actions/trip_actions';
import TripFrom from './trip_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createTrip: trip => dispatch(createTrip(trip)),
  createImage: image => dispatch(createImage(image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripFrom);
