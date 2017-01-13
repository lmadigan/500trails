import { connect } from 'react-redux';

import { fetchTrip } from '../../actions/trip_actions';
import { selectTrip } from '../../reducers/selectors';

import TripIndexItem from './trip_index_item';

const mapStateToProps = (state, ownProps ) => ({
  tripId: ownProps.params.tripId,
  trip: state.trips[ownProps.params.tripId]
});

const mapDispatchToProps = dispatch => ({
  fetchTrip: id => dispatch(fetchTrip(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripIndexItem);
