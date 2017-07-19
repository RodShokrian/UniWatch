import * as APIUtil from '../util/api_util_university'

export const RECEIVE_UNIVERSITIES = 'RECEIVE_UNIVERSITIES';
export const RECEIVE_UNIVERSITY = 'RECEIVE_UNIVERSITY';

export const receiveUniversities = universities => ({
  type: RECEIVE_UNIVERSITIES,
  universities
});

export const receiveUniversity = university => ({
  type: RECEIVE_UNIVERSITY,
  university
});

export const requestUniversities = filters => dispatch => (
  APIUtil.fetchUniversities(filters).then(universities => (
    dispatch(receiveUniversities(universities))
  ))
);

export const requestUniversity = id => dispatch => (
  APIUtil.fetchUniversity(id).then(university => (
    dispatch(receiveUniversity(university))
  ))
);
