import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestUniversities, requestFollows } from '../../actions/university_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  follows: state.follows,
  universities: state.universities
});

const mapDispatchToProps = dispatch => ({
  requestUniversities: () => dispatch(requestUniversities(100, 0))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
