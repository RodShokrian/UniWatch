import merge from 'lodash/merge';

import { RECEIVE_FOLLOWS } from '../actions/follows_actions';

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows;
    default:
      return state;
  }
};

export default FollowsReducer;
