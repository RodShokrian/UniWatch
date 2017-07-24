export const fetchUniversities = (perPage, offset) => (
  $.ajax({
    method: 'GET',
    url: 'api/universities',
    data: {limit: perPage, offset: offset}
  })
);

export const fetchUniversity = id => (
  $.ajax({
    method: 'GET',
    url: `api/universities/${id}`
  })
);

export const makeFollow = (followerId, uniId) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${followerId}/followed_universities`,
    data: { followeduniversity: {
                                followerId,
                                uniId
                                }
          }
  })
);

export const destroyFollow = (id, followId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}/followed_universities/${followId}`
  })
);

export const fetchFollows = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/followed_universities`
  })
);

export const fetchFollow = (userId, followId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/followed_universities/${followId}`
  })
);
