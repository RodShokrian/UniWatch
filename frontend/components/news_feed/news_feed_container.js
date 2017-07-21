import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import newsFeed from './news_feed';

const mapStateToProps = ({ news }, { university }) => {
  debugger;
  return ({
    news: news,
    university
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestNews: (searchString) => dispatch(requestNews(searchString))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newsFeed);
