import * as ReadebleAPI from '../utils/ReadebleAPI';

import {
  actionVotePost,
  actionGetAll,
  actionGetCategories,
  actionAddPost,
  actionLoading,
  actionVoteComment,
  actionGetAlByCategory,
  actionUpdatePost,
  actionModalNewPost,
  actionModalEditPost,
  actionModalDeletePost,
  actionModalNewComment,
  actionModalEditComment,
  actionModalDeleteComment,
  actionDeletePost,
  actionOrderByVotes,
  actionOrderByDate,
  actionGetPostDetails,
  actionAddComment,
  actionUpdateComment,
  ADD_POST,
  GET_ALL,
  GET_CATEGORIES,
  ADD_VOTE_POST,
  LOADING,
  ADD_VOTE_COMMENT,
  GET_ALL_BY_CATEGORY,
  UPDATE_POST,
  MODAL_NEW_POST,
  MODAL_EDIT_POST,
  MODAL_DELETE_POST,
  DELETE_POST,
  ORDER_BY_POSTS,
  ORDER_BY_DATE,
  GET_POST_DETAIL,
  ADD_COMMENT,
  UPDATE_COMMENT,
  MODAL_NEW_COMMENT,
  MODAL_EDIT_COMMENT,
  MODAL_DELETE_COMMENT,
  DELETE_COMMENT,
  actionDeleteComment
} from '../actions'

const initialState =
  {
    posts: [],
    categories: [],
    loading: true,
    showingNewModal: false,
    showingAnyPostToDelete: false,
    showingAnyPostToEdit: false,
    showingNewCommentModal: false,
    showingAnyCommentToDelete: false,
    showingAnyCommentToEdit: false,
    orderAscending: true,
    orderAscendingDate: true
  }

export default function posts(state = initialState, action) {
  const { post, posts, postDetail, comment } = action;

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, post],
        showingNewModal: false
      }
    case ADD_COMMENT:
      return {
        ...state,
        ...state.postDetail.comments = [...state.postDetail.comments, comment],
        showingNewCommentModal: false
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
        }),
        ...state.postDetail !== undefined ? state.postDetail.voteScore = post.voteScore : ''
      }
    case ADD_VOTE_COMMENT:
      return {
        ...state,
        ...state.postDetail.comments.map((cmt) => {
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
      post.showingEditModal = false;
      return {
        ...state,
        showingAnyPostToEdit: false,
        ...state.posts.map((pt) => {
          if (pt.id === post.id) {
            pt.author = post.author;
            pt.category = post.category;
            pt.title = post.title;
            pt.body = post.body;
            pt.showingEditModal = post.showingEditModal;
          }
        }),
        postDetail: post
      }
    case UPDATE_COMMENT:
      comment.showingEditCommentsModal = false;
      return {
        ...state,
        showingAnyCommentToEdit: false,
        ...state.postDetail.comments.map((cmt) => {
          if (cmt.id === comment.id) {
            cmt.author = comment.author;
            cmt.body = comment.body;
            cmt.showingEditCommentModal = comment.showingEditCommentModal;
          }
        })
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((pt) => pt.id !== post.id),
        showingAnyPostToDelete: false,
        postDetail: {}
      }
    case DELETE_COMMENT:
      return {
        ...state,
        showingAnyCommentToDelete: false,
        ...state.postDetail.comments = state.postDetail.comments.filter((cmt) => cmt.id !== comment.id)
      }
    case MODAL_NEW_POST:
      const { showingNewModal } = action;
      return {
        ...state,
        showingNewModal
      }
    case MODAL_NEW_COMMENT:
      const { showingNewCommentModal } = action;
      return {
        ...state,
        showingNewCommentModal
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
    case MODAL_EDIT_COMMENT:
      const { showingAnyCommentToEdit } = action;
      return {
        ...state,
        showingAnyCommentToEdit,
        ...state.postDetail.comments.map((cmt) => {
          if (cmt.id === comment.id) {
            cmt.showingEditCommentModal = comment.showingEditCommentModal
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
    case MODAL_DELETE_COMMENT:
      const { showingAnyCommentToDelete } = action;
      return {
        ...state,
        showingAnyCommentToDelete,
        ...state.postDetail.comments.map((cmt) => {
          if (cmt.id === comment.id) {
            cmt.showingDeleteCommentModal = comment.showingDeleteCommentModal
          }
        })
      }
    case ORDER_BY_POSTS:
      const { orderAscending } = action;
      return {
        ...state,
        orderAscending,
        ...state.posts.sort((a, b) => {
          if (orderAscending)
            return a.voteScore - b.voteScore;
          else
            return b.voteScore - a.voteScore;
        })
      }
    case ORDER_BY_DATE:
      const { orderAscendingDate } = action;
      return {
        ...state,
        orderAscendingDate,
        ...state.posts.sort((a, b) => {
          if (orderAscendingDate)
            return a.timestamp - b.timestamp;
          else
            return b.timestamp - a.timestamp;
        })
      }
    case GET_POST_DETAIL:
      return {
        ...state,
        postDetail
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

export function sendComment(comment) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.doComment(comment)
      .then(() => {
        dispatch(actionAddComment(comment));
        console.log('Commented successfully !!!!!!');
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

export function modalComment(comment, showing) {
  return (dispatch) => {
    if (comment !== undefined) {
      comment.showingEditCommentModal = showing;
      const showingAnyCommentToEdit = showing;
      const actModal = actionModalEditComment(comment, showingAnyCommentToEdit);
      dispatch(actModal);
    } else {
      const actModal = actionModalNewComment(showing);
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

export function modalDeleteComment(comment, showing) {
  return (dispatch) => {
    comment.showingDeleteCommentModal = showing;
    const showingAnyCommentToDelete = showing;
    const actModal = actionModalDeleteComment(comment, showingAnyCommentToDelete);
    dispatch(actModal);
  }
}

export function orderByVotes(orderAscending) {
  return (dispatch) => {
    reload(true, dispatch);

    const action = actionOrderByVotes(orderAscending);
    dispatch(action);

    reload(false, dispatch);
  }
}

export function orderByDate(orderAscendingDate) {
  return (dispatch) => {
    reload(true, dispatch);

    const action = actionOrderByDate(orderAscendingDate);
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

export function removeComment(comment) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.removeComment(comment)
      .then(() => {
        modalDeleteComment(comment, false);
        const action = actionDeleteComment(comment);
        dispatch(action);
        console.log('Comment deleted successfully !!!!!!');

        reload(false, dispatch);
      });
  };
}

export function getAll() {
  return (dispatch) => {
    ReadebleAPI.getAll()
      .then((posts) => {
        posts.map((pt) => {
          pt.showingEditModal = false;
          pt.showingDeleteModal = false;
        })
        posts.sort((a, b) => {
            return a.voteScore - b.voteScore;
        })
        const action = actionGetAll(posts);
        dispatch(action);
      });
  };
}

export function getPostDetail(postDetailId, category) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.getPostDetail(postDetailId)
      .then((postDetail) => {
        if (postDetail.category === category) {
          getComments(postDetail, dispatch);
        } else {
          const postDetail = {};
          const action = actionGetPostDetails(postDetail);
          dispatch(action);
        }
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

function getComments(postDetail, dispatch) {
  const postId = postDetail.id;
  ReadebleAPI.getComments(postId)
    .then((comments) => {
      comments.map((cmt) => {
        cmt.showingEditCommentModal = false;
        cmt.showingDeleteCommentModal = false;
      })
      postDetail.comments = comments;
      const action = actionGetPostDetails(postDetail);
      dispatch(action);
      reload(false, dispatch);
    });
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

export function updateComment(comment) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.updateComment(comment)
      .then(() => {
        dispatch(actionUpdateComment(comment));
        console.log('Comment updated successfully !!!!!!');
        reload(false, dispatch);
      });
  }
}