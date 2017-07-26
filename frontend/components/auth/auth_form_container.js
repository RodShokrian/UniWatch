import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './auth_form';


const mapStateToProps = (state, { match }) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login' || 'demo') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    demo: user => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
