import * as APIUtil from '../util/api_util_university';

export const RECEIVE_UNIVERSITIES = 'RECEIVE_UNIVERSITIES';
export const RECEIVE_UNIVERSITY = 'RECEIVE_UNIVERSITY';
export const RECEIVE_UNI_DATA = 'RECEIVE_UNI_DATA';

export const receiveUniversities = universities => ({
  type: RECEIVE_UNIVERSITIES,
  universities
});

export const receiveUniversity = university => ({
  type: RECEIVE_UNIVERSITY,
  university
});

export const receiveUniData = uniData => ({
  type: RECEIVE_UNI_DATA,
  uniData
});

export const requestUniData = () => dispatch => (
  APIUtil.fetchUniData().then(uniData => (
    dispatch(receiveUniData(uniData))
  ))
);

export const requestUniversities = (perPage, offset) => dispatch => (
  APIUtil.fetchUniversities(perPage, offset).then(universities => (
    dispatch(receiveUniversities(universities))
  ))
);

export const requestUniversity = id => dispatch => (
  APIUtil.fetchUniversity(id).then(university => (
    dispatch(receiveUniversity(university))
  ))
);

export const createFollow = (followerId, uniId) => dispatch => (
  APIUtil.makeFollow(followerId, uniId)
);

export const deleteFollow = (followerId, uniId) => dispatch => (
  APIUtil.destroyFollow(followerId, uniId)
);
