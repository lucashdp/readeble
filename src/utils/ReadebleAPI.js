const api = 'http://localhost:3001';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
};

export const getAll = () =>
  fetch(`${api}/posts/`, { headers })
    .then(response => response.json())
    .then(data => data);

export const getCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(response => response.json())
    .then(data => data.categories);