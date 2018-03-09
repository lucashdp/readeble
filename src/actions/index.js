export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const ADD_VOTE_COMMENT = 'ADD_VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const REMOVE_POST = 'REMOVE_POST';
export const GET_ALL = 'GET_ALL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_VOTE_POST = 'ADD_VOTE_POST';
export const LOADING = 'LOADING';
export const GET_ALL_BY_CATEGORY = 'GET_ALL_BY_CATEGORY';
export const MODAL_NEW_POST = 'MODAL_NEW_POST';
export const MODAL_EDIT_POST = 'MODAL_EDIT_POST';
export const MODAL_DELETE_POST = 'MODAL_DELETE_POST';
export const MODAL_NEW_COMMENT = 'MODAL_NEW_COMMENT';
export const MODAL_EDIT_COMMENT = 'MODAL_EDIT_COMMENT';
export const MODAL_DELETE_COMMENT = 'MODAL_DELETE_COMMENT';
export const ORDER_BY_POSTS = 'ORDER_BY_POSTS';
export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const ADD_COMMENT = 'ADD_COMMENT';

export function actionAddPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function actionAddComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function actionVotePost(post, option) {
  return {
    type: ADD_VOTE_POST,
    post,
    option
  }
}

export function actionVoteComment(comment, option) {
  return {
    type: ADD_VOTE_COMMENT,
    comment,
    option
  }
}

export function actionRemovePost({ post }) {
  return {
    type: REMOVE_POST,
    post
  }
}

export function actionGetAll(posts) {
  return {
    type: GET_ALL,
    posts
  }
}

export function actionGetCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function actionLoading(loading) {
  return {
    type: LOADING,
    loading
  }
}

export function actionGetAlByCategory(posts) {
  return {
    type: GET_ALL_BY_CATEGORY,
    posts
  }
}

export function actionUpdatePost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function actionUpdateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export function actionModalNewPost(showingNewModal) {
  return {
    type: MODAL_NEW_POST,
    showingNewModal
  }
}

export function actionModalEditPost(post, showingAnyPostToEdit) {
  return {
    type: MODAL_EDIT_POST,
    post,
    showingAnyPostToEdit
  }
}

export function actionModalDeletePost(post, showingAnyPostToDelete) {
  return {
    type: MODAL_DELETE_POST,
    post,
    showingAnyPostToDelete
  }
}

export function actionModalNewComment(showingNewCommentModal) {
  return {
    type: MODAL_NEW_COMMENT,
    showingNewCommentModal
  }
}

export function actionModalEditComment(comment, showingAnyCommentToEdit) {
  return {
    type: MODAL_EDIT_COMMENT,
    comment,
    showingAnyCommentToEdit
  }
}

export function actionModalDeleteComment(comment, showingAnyCommentToDelete) {
  return {
    type: MODAL_DELETE_COMMENT,
    comment,
    showingAnyCommentToDelete
  }
}

export function actionDeletePost(post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function actionDeleteComment(comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export function actionOrderByVotes(orderAscending) {
  return {
    type: ORDER_BY_POSTS,
    orderAscending
  }
}

export function actionGetPostDetails(postDetail) {
  return {
    type: GET_POST_DETAIL,
    postDetail
  }
}