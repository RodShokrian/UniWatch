import * as APIUtil from '../util/api_util_news'

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

export const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const requestNews = searchString => dispatch => (
  parsedString = searchString.replace(/ /g, "+");
  APIUtil.fetchNews(parsedString).then(news => (
    dispatch(receiveNews(news))
  ))
);
