const api = 'http://localhost:3001';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
};

/* --------------------------------------REGION GET--------------------------------------------------- */
export const getAll = () =>
  fetch(`${api}/posts/`, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => data);

export const getCategories = () =>
  fetch(`${api}/categories/`, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => data.categories);

export const getComments = (postId) =>
  fetch(`${api}/´posts/${postId}/comments`, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => data.comments);






/* --------------------------------------REGION POST-------------------------------------------------- */
export const doPost = (post) => {
  return fetch(`${api}/posts/`, { method: 'POST', headers, post })
    .then(response => response.json());
};

export const votePost = (post, option) => {
  const jsonOption = JSON.stringify({ option });
  return fetch(`${api}/posts/${post.id}`, { method: 'POST', headers, body: jsonOption })
    .then(response => response.json());
};






/* --------------------------------------REGION DELETE------------------------------------------------ */
export const removePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, { method: 'DELETE', headers })
    .then(response => response.json());
};