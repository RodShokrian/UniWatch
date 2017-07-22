import { connect } from 'react-redux';
import { requestUniversities, createFollow, requestFollows, deleteFollow }
from '../../actions/university_actions';
import UniversityIndex from './university_index';

const mapStateToProps = (state) => ({
  universities: state.universities,
  currentUser: state.session.currentUser,
  follows: state.follows
});

const mapDispatchToProps = dispatch => ({
  requestUniversities: () => dispatch(requestUniversities()),
  createFollow: (followerId, uniId) => dispatch(createFollow(followerId, uniId)),
  requestFollows: (id) => dispatch(requestFollows(id)),
  deleteFollow: (userId, followId) => dispatch(deleteFollow(userId, followId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniversityIndex);
