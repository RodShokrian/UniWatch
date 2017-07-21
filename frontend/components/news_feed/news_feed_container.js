import { connect } from 'react-redux';

import { requestNews } from '../../actions/news_actions';
import newsFeed from './news_feed';

const mapStateToProps = ({news}) => {
  return ({
    news: news
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestNews: (searchString) => dispatch(requestNews(searchString))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newsFeed);
