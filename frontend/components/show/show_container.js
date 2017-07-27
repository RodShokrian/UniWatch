import { connect } from 'react-redux';
import { requestUniversity } from '../../actions/university_actions';
import UniversityShow from './university_show';

const mapStateToProps = (state, { match }) => {
  return {
  currentUniversity: state.universities.currentUniversity
  };
};

const mapDispatchToProps = dispatch => ({
  requestUniversity: (id) => dispatch(requestUniversity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniversityShow);
