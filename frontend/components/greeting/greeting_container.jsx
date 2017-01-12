import {connect} from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  rightHeaderItem: null
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
