import * as APIUtil from '../util/api_util_news'

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

export const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const requestNews = searchString => dispatch => (
  APIUtil.fetchNews(searchString).then(news => (
    dispatch(receiveNews(news))
  ))
);
