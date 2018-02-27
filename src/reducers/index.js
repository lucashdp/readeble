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
  actionDeletePost,
  actionModalDeletePost,
  actionOrderByVotes,
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
  MODAL_EDIT_POST,
  DELETE_POST,
  MODAL_DELETE_POST,
  ORDER_BY_POSTS
} from '../actions'

const initialState = { posts: [], categories: [], loading: true, showingNewModal: false, showingAnyPostToDelete: false, showingAnyPostToEdit: false }

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
        showingAnyPostToEdit: false,
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((pt) => pt.id !== post.id),
        showingAnyPostToDelete: false
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
        showingAnyPostToEdit,
        ...state.posts.map((pt) => {
          if (pt.id === post.id) {
            pt.showingEditModal = post.showingEditModal
          }
        })
      }
    case MODAL_DELETE_POST:
      const { showingAnyPostToDelete } = action;
      return {
        ...state,
        showingAnyPostToDelete,
        ...state.posts.map((pt) => {
          if (pt.id === post.id) {
            pt.showingDeleteModal = post.showingDeleteModal
          }
        })
      }
    case ORDER_BY_POSTS:
      return {
        ...state,
        ...state.posts.sort((a, b) => {
          return a.voteScore - b.voteScore;
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
      const showingAnyPostToEdit = showing;
      const actModal = actionModalEditPost(post, showingAnyPostToEdit);
      dispatch(actModal);
    } else {
      const actModal = actionModalNewPost(showing);
      dispatch(actModal);
    }
  }
}

export function modalDeletePost(post, showing) {
  return (dispatch) => {
    post.showingDeleteModal = showing;
    const showingAnyPostToDelete = showing;
    const actModal = actionModalDeletePost(post, showingAnyPostToDelete);
    dispatch(actModal);
  }
}

export function orderByVotes() {
  return (dispatch) => {
    reload(true, dispatch);

    const action = actionOrderByVotes();
    dispatch(action);
    
    reload(false, dispatch);
  }
}

export function removePost(post) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.removePost(post)
      .then(() => {
        modalDeletePost(post, false);
        const action = actionDeletePost(post);
        dispatch(action);
        console.log('Post deleted successfully !!!!!!');

        reload(false, dispatch);
      });
  };
}

export function getAll() {
  return (dispatch) => {
    ReadebleAPI.getAll()
      .then((posts) => {
        posts.map((pt) => {
          pt.showingEditModal = false,
            pt.showingDeleteModal = false
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