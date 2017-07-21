import { connect } from 'react-redux';
import { requestUniversities } from '../../actions/university_actions';
import UniversityIndex from './university_index';

const mapStateToProps = (state) => ({
  universities: state.universities
});

const mapDispatchToProps = dispatch => ({
  requestUniversities: () => dispatch(requestUniversities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniversityIndex);
