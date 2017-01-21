import {connect} from 'react-redux';
import HomeFeed from './home_feed';
import { selectFeed } from '../../reducers/selectors';
import { fetchTrips, updateTrip, createLike, deleteLike } from '../../actions/trip_actions';



const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    feedTrips: selectFeed(state.trips)
  };
};

const mapDispatchToProps = dispatch => ({
  createLike: (data) => dispatch(createLike(data)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  fetchTrips: () => dispatch(fetchTrips()),
  updateTrip: (trip) => dispatch(updateTrip(trip))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeFeed);
