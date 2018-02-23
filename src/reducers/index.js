import * as ReadebleAPI from '../utils/ReadebleAPI';

import {
  actionVoteScore,
  actionGetAll,
  actionGetCategories,
  actionAddPost,
  actionRemovePost,
  actionLoading,
  actionGetComments,
  ADD_POST,
  REMOVE_POST,
  GET_ALL,
  GET_CATEGORIES,
  ADD_VOTE_POST,
  LOADING,
  GET_COMMENTS
} from '../actions'

const initialState = { posts: [], categories: [], loading: true }

function posts(state = initialState, action) {
  const { post, posts } = action;

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, post]
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
    default:
      return state
  }
}

function AddPost(post) {
  ReadebleAPI.doPost(post)
    .then((post) => {
      this.props.dispatch(actionAddPost(post));
      console.log('Posted successfully !!!!!!');
    });
}

export function votePost(post, option) {
  return (dispatch) => {
    reload(true, dispatch);

    ReadebleAPI.votePost(post, option)
      .then((post) => {
        const action = actionVoteScore(post, option);
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
      .then((post) => {
        const action = actionVoteScore(comment, option);
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
        const action = actionGetAll(posts);
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
        const actLoaded = actionLoading(false);
        dispatch(actLoaded);
      });
  };
}

export function getComments(postId) {
  return (dispatch) => {
    const actLoading = actionLoading(true);
    dispatch(actLoading);

    ReadebleAPI.getComments(postId)
      .then((comments) => {
        const action = actionGetComments(comments);
        dispatch(action);
        const actLoaded = actionLoading(false);
        dispatch(actLoaded);
      });
  };
}

export default posts