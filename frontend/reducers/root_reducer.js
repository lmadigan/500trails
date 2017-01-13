import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TripsReducer from './trips_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  trips: TripsReducer
});

export default rootReducer;
