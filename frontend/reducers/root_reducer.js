import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TripsReducer from './trips_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  trips: TripsReducer,
  user: UsersReducer
});

export default rootReducer;
