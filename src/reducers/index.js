import * as ReadebleAPI from '../utils/ReadebleAPI';

import {
  actionVotePost,
  actionGetAll,
  actionGetCategories,
  actionAddPost,
  actionRemovePost,
  actionLoading,
  actionGetComments,
  actionVoteComment,
  actionGetAlByCategory,
  actionUpdatePost,
  actionModalNewPost,
  actionModalEditPost,
  ADD_POST,
  REMOVE_POST,
  GET_ALL,
  GET_CATEGORIES,
  ADD_VOTE_POST,
  LOADING,
  GET_COMMENTS,
  ADD_VOTE_COMMENT,
  GET_ALL_BY_CATEGORY,
  UPDATE_POST,
  MODAL_NEW_POST,
  MODAL_EDIT_POST
} from '../actions'

const initialState = { posts: [], categories: [], loading: true, showingNewModal: false }

export default function posts(state = initialState, action) {
  const { post, posts } = action;

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, post],
        showingNewModal: false
      }
    case REMOVE_POST:
      return {
        ...state,
        [post]: null
      }
    case GET_ALL:
      return {
        ...state,
        posts
      }
    case GET_CATEGORIES:
      const { categories } = action;
      return {
        ...state,
        categories
      }
    case GET_COMMENTS:
      const { comments } = action;
      return {
        ...state,
        comments
      }
    case LOADING:
      const { loading } = action;
      return {
        ...state,
        loading
      }
    case ADD_VOTE_POST:
      return {
        ...state,
        ...state.posts.map((pt) => {
          if (pt.id === post.id)
            pt.voteScore = post.voteScore
        })
      }
    case ADD_VOTE_COMMENT:
      const { comment } = action;
      return {
        ...state,
        ...state.comments.map((cmt) => {
          if (cmt.id === comment.id)
            cmt.voteScore = comment.voteScore
        })
      }
    case GET_ALL_BY_CATEGORY:
      return {
        ...state,
        posts
      }
    case UPDATE_POST:
      return {
        ...state,
        ...state.posts.map((pt) => {
          if (pt.id === post.id) {
            pt.author = post.author;
            pt.category = post.category;
            pt.title = post.title;
            pt.body = post.body;
            pt.showingEditModal = false;
          }
        })
      }
    case MODAL_NEW_POST:
      const { showingNewModal } = action;
      return {
        ...state,
        showingNewModal
      }
    case MODAL_EDIT_POST:
      const { showingAnyPostToEdit } = action;
      return {
        ...state,
        showingAnyPostToEdit: showingAnyPostToEdit,
        ...state.posts.map((pt) => {
          if (pt.id === post.id) {
            pt.showingEditModal = post.showingEditModal
          }
        })
      }
    default:
      return state
  }
}

export function sendPost(post) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.doPost(post)
      .then(() => {
        dispatch(actionAddPost(post));
        console.log('Posted successfully !!!!!!');
        reload(false, dispatch);
      });
  }
}

export function votePost(post, option) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.votePost(post, option)
      .then((post) => {
        const action = actionVotePost(post, option);
        dispatch(action);
        console.log('Post voted successfully !!!!!!');
        reload(false, dispatch);
      });
  }
}

export function voteComment(comment, option) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.voteComment(comment, option)
      .then((comment) => {
        const action = actionVoteComment(comment, option);
        dispatch(action);
        console.log('Comment voted successfully !!!!!!');
        reload(false, dispatch);
      });
  }
}

function reload(loading, dispatch) {
  const actLoading = actionLoading(loading);
  dispatch(actLoading);
}

export function modal(post, showing) {
  return (dispatch) => {
    if (post !== undefined) {
      post.showingEditModal = showing;
      const actModal = actionModalEditPost(post, {showingAnyPostToEdit: showing});
      dispatch(actModal);
    } else {
      const actModal = actionModalNewPost(showing);
      dispatch(actModal);
    }
  }
}

function RemovePost(post) {
  ReadebleAPI.removePost(post)
    .then((post) => {
      this.props.dispatch(actionRemovePost(post));
      console.log('Post deleted successfully !!!!!!');
    });
}

export function getAll() {
  return (dispatch) => {
    ReadebleAPI.getAll()
      .then((posts) => {
        posts.map((pt) => {
          pt.showingEditModal = false
        })
        const action = actionGetAll(posts);
        dispatch(action);
      });
  };
}

export function getAllByCategory(categoryId) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.getAllByCategory(categoryId)
      .then((posts) => {
        const action = actionGetAlByCategory(posts);
        dispatch(action);
      });
  };
}

export function getCategories() {
  return (dispatch) => {
    ReadebleAPI.getCategories()
      .then((categories) => {
        const action = actionGetCategories(categories);
        dispatch(action);

        reload(false, dispatch);
      });
  };
}

export function getComments(postId) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.getComments(postId)
      .then((comments) => {
        const action = actionGetComments(comments);
        dispatch(action);

        reload(false, dispatch);
      });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.updatePost(post)
      .then(() => {
        dispatch(actionUpdatePost(post));
        console.log('Post updated successfully !!!!!!');
        reload(false, dispatch);
      });
  }
}