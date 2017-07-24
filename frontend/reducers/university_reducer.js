import merge from 'lodash/merge';

import { RECEIVE_UNIVERSITIES, RECEIVE_UNIVERSITY } from '../actions/university_actions';
import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW } from '../actions/follows_actions';

const UniversitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_UNIVERSITIES:
      Object.keys(action.universities).forEach(id => {
        const university = action.universities[id];
        university.follows = [];
      });
      return action.universities;
    case RECEIVE_UNIVERSITY:
      action.university.follows = [];
      const newUniversity = {[action.university.id]: action.university};
      return merge(newState, newUniversity);
    default:
      return state;
  }
};

export default UniversitiesReducer;
