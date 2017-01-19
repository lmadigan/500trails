import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchTrip, deleteTrip } from '../../actions/trip_actions';
import UserProfile from './user_profile';
import { selectTrips } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.params.userId,
    user: state.user,
    currentUser: state.session.currentUser,
    trips: ownProps.location.pathname.split("/")
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchTrip: id => dispatch(fetchTrip(id)),
  deleteTrip: id => dispatch(deleteTrip(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
