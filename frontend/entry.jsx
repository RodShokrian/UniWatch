//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

//Tests
import { test_request, test_request2, within_distance } from './util/api_util_scorecard';
import { newsTest } from './util/api_util_news';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.test_request = test_request;
  window.test_request2 = test_request2;
  window.within_distance = within_distance;
  window.newsTest = newsTest;
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
