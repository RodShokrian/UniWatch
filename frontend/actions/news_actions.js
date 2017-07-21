import * as APIUtil from '../util/api_util_news'

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

export const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const requestNews = searchString => dispatch => {
  const parsedString = searchString.replace(/ /g, "+");
  return ( APIUtil.fetchNews(parsedString).then(news => (
    dispatch(receiveNews(news))
  )));
};
