export const fetchProfile = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);
