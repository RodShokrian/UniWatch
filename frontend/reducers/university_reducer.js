import merge from 'lodash/merge';

import { RECEIVE_UNIVERSITIES, RECEIVE_UNIVERSITY }
from '../actions/university_actions';

const UniversitiesReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_UNIVERSITIES:
      return action.universities;
    case RECEIVE_UNIVERSITY:
      const newUniversity = {[action.university.id]: action.university};
      return merge({}, state, newUniversity);
    default:
      return state;
  }
};

export default UniversitiesReducer;
