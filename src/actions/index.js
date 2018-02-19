export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const GET_ALL = 'GET_ALL'
export const GET_CATEGORIES = 'GET_CATEGORIES'

export function addPost ( post ) {
  return {
    type: ADD_POST,
    post
  }
}

export function removePost ({ post }) {
  return {
    type: REMOVE_POST,
    post
  }
}

export function getAll ({ posts }) {
  return {
    type: GET_ALL,
    posts
  }
}

export function getCategories ({ categories }) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}