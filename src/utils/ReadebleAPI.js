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
  fetch(`${api}/posts/${postId}/comments`, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => data);

export const getAllByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => data);

export const getPostDetail = (postDetailId) =>
  fetch(`${api}/posts/${postDetailId}`, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => data);





/* --------------------------------------REGION POST-------------------------------------------------- */
export const doPost = (post) => {
  const jsonPost = JSON.stringify(post);
  return fetch(`${api}/posts/`, { method: 'POST', headers, body: jsonPost })
    .then(response => response.json());
};

export const doComment = (comment) => {
  const jsonComment = JSON.stringify(comment);
  return fetch(`${api}/comments/`, { method: 'POST', headers, body: jsonComment })
    .then(response => response.json());
};

export const votePost = (post, option) => {
  const jsonOption = JSON.stringify({ option });
  return fetch(`${api}/posts/${post.id}`, { method: 'POST', headers, body: jsonOption })
    .then(response => response.json());
};

export const voteComment = (comment, option) => {
  const jsonOption = JSON.stringify({ option });
  return fetch(`${api}/comments/${comment.id}`, { method: 'POST', headers, body: jsonOption })
    .then(response => response.json());
};



/* --------------------------------------REGION PUT------------------------------------------------ */
export const updatePost = (post) => {
  const jsonPost = JSON.stringify(post);
  return fetch(`${api}/posts/${post.id}`, { method: 'PUT', headers, body: jsonPost })
    .then(response => response.json());
};

export const updateComment = (comment) => {
  const jsonComment = JSON.stringify(comment);
  return fetch(`${api}/comments/${comment.id}`, { method: 'PUT', headers, body: jsonComment })
    .then(response => response.json());
};


/* --------------------------------------REGION DELETE------------------------------------------------ */
export const removePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, { method: 'DELETE', headers })
    .then(response => response.json());
};

export const removeComment = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, { method: 'DELETE', headers })
    .then(response => response.json());
};