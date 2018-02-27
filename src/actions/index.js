export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const GET_ALL = 'GET_ALL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_VOTE_POST = 'ADD_VOTE_POST';
export const LOADING = 'LOADING';
export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_VOTE_COMMENT = 'ADD_VOTE_COMMENT';
export const GET_ALL_BY_CATEGORY = 'GET_ALL_BY_CATEGORY';
export const UPDATE_POST = 'UPDATE_POST';
export const MODAL_NEW_POST = 'MODAL_NEW_POST';
export const MODAL_EDIT_POST = 'MODAL_EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const MODAL_DELETE_POST = 'MODAL_DELETE_POST';

export function actionAddPost ( post ) {
  return {
    type: ADD_POST,
    post
  }
}

export function actionVotePost ( post, option ) {
  return {
    type: ADD_VOTE_POST,
    post,
    option
  }
}

export function actionVoteComment ( comment, option ) {
  return {
    type: ADD_VOTE_COMMENT,
    comment,
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

export function actionGetComments (comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function actionGetAlByCategory (posts) {
  return {
    type: GET_ALL_BY_CATEGORY,
    posts
  }
}

export function actionUpdatePost ( post ) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function actionModalNewPost (showingNewModal) {
  return {
    type: MODAL_NEW_POST,
    showingNewModal
  }
}

export function actionModalEditPost (post, showingAnyPostToEdit) {
  return {
    type: MODAL_EDIT_POST,
    post,
    showingAnyPostToEdit
  }
}

export function actionDeletePost (post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function actionModalDeletePost (post, showingAnyPostToDelete) {
  return {
    type: MODAL_DELETE_POST,
    post,
    showingAnyPostToDelete
  }
}