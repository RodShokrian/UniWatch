import React from 'react';
import NewsItem from './news_item';

class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.requestNews(this.props.university.schoolName);
  }

  render () {
    if (Object.keys(this.props.news).length === 0) {
      return (<div></div>)
    }
    const newsItems = this.props.news.value.map((story, idx) => (
      <NewsItem key={idx} story={story} />
      )
    );
    return (
      <div className="news-feed-container">
        {newsItems}
      </div>
    );
  }
}

export default NewsFeed;
