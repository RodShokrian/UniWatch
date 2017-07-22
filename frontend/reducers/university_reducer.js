import merge from 'lodash/merge';

import { RECEIVE_UNIVERSITIES, RECEIVE_UNIVERSITY } from '../actions/university_actions';
import { RECEIVE_FOLLOWS } from '../actions/follows_actions';

const UniversitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_UNIVERSITIES:
      return action.universities;
    case RECEIVE_UNIVERSITY:
      const newUniversity = {[action.university.id]: action.university};
      return merge(newState, newUniversity);
    case RECEIVE_FOLLOWS:
      return merge(newState, action.follows);
    default:
      return state;
  }
};

export default UniversitiesReducer;
