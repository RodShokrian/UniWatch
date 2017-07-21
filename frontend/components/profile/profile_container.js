import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestCurrentUser: (id) => dispatch(requestCurrentUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
