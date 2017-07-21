import merge from 'lodash/merge';

import { RECEIVE_NEWS } from '../actions/news_actions';

const NewsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_NEWS:
      return action.news;
    default:
      return state;
  }
};

export default NewsReducer;
