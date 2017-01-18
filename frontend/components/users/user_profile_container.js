import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchTrip } from '../../actions/trip_actions';
import UserProfile from './user_profile';
import { selectTrips } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.params.userId,
    user: state.user,
    currentUser: state.session.currentUser,
    trips: state.user.trips
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchTrip: id => dispatch(fetchTrip(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
