export const fetchUniversities = filters => (
  $.ajax({
    method: 'GET',
    url: 'api/universities',
    filters
  })
);

export const fetchUniversity = id => (
  $.ajax({
    method: 'GET',
    url: `api/universities/${id}`
  })
);
