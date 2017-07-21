//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

//Tests
import { newsTest } from './util/api_util_news';
import { requestNews } from './actions/news_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.newsTest = newsTest;
  window.requestNews = requestNews;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.store = store;
    delete window.currentUser;
  } else {
    store = configureStore();
    window.store = store;
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
