const api = "https://localhost:3001"

export const get = () =>
  fetch(`${api}/categories`)
    .then(res => res.json())
    .then(data => data.categories)