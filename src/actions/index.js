export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const GET_ALL = 'GET_ALL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_VOTE_POST = 'ADD_VOTE_POST';
export const LOADING = 'LOADING';

export function actionAddPost ( post ) {
  return {
    type: ADD_POST,
    post
  }
}

export function actionVoteScore ( post, option ) {
  return {
    type: ADD_VOTE_POST,
    post,
    option
  }
}

export function actionRemovePost ({ post }) {
  return {
    type: REMOVE_POST,
    post
  }
}

export function actionGetAll (posts) {
  return {
    type: GET_ALL,
    posts
  }
}

export function actionGetCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function actionLoading (loading) {
  return {
    type: LOADING,
    loading
  }
}