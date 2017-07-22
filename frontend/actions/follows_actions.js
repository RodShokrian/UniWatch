import * as APIUtil from '../util/api_util_university'

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';

export const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const requestFollows = id => dispatch => {
  return ( APIUtil.fetchFollows(id).then(follows => (
    dispatch(receiveFollows(follows))
  )));
};
