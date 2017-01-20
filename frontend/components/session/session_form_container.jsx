import { connect } from 'react-redux';
import { login, signup, logout, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login' ) ? login : signup;

  return {
    processForm: user  => dispatch(processForm(user)),
    clearErrors: user  => dispatch(clearErrors(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
