import merge from 'lodash/merge';

import { RECEIVE_UNI_DATA } from '../actions/university_actions';

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_UNI_DATA:
      return action.uniData;
    default:
      return state;
  }
};

export default FollowsReducer;
