import { connect } from 'react-redux';
import { requestUniversities, createFollow, deleteFollow, requestUniData }
from '../../actions/university_actions';
import { UniversityIndex } from './university_index';

const mapStateToProps = (state) => ({
  universities: state.universities,
  currentUser: state.session.currentUser,
  follows: state.follows,
  uniData: state.uniData
});

const mapDispatchToProps = dispatch => ({
  requestUniversities: (perPage, offset) => dispatch(requestUniversities(perPage, offset)),
  requestUniData: () => dispatch(requestUniData()),
  createFollow: (followerId, uniId) => dispatch(createFollow(followerId, uniId)),
  deleteFollow: (userId, followId) => dispatch(deleteFollow(userId, followId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniversityIndex);
