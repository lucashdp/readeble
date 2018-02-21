import * as ReadebleAPI from '../utils/ReadebleAPI';

import {
  actionVoteScore,
  actionGetAll,
  actionGetCategories,
  actionAddPost,
  actionRemovePost,
  ADD_POST,
  REMOVE_POST,
  GET_ALL,
  GET_CATEGORIES,
  ADD_VOTE_POST
} from '../actions'

const initialState = { posts: [], categories: [], loading: true }

function posts(state = initialState, action) {
  const { post, posts, categories } = action

  switch (action.type) {
    case ADD_POST:
      AddPost(post);
      return {
        ...state,
        posts: [...state.posts, action.post]
      }
    case REMOVE_POST:
      const { post } = action
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
      return {
        ...state,
        categories,
        loading: false
      }
    case ADD_VOTE_POST:
      return {
        ...state,
        posts: [...state.posts, post]
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
    ReadebleAPI.votePost(post, option)
      .then((post) => {
        const action = actionVoteScore(post, option);
        dispatch(action);
        console.log('Post voted successfully !!!!!!');
      });
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
      });
  };
}

export default posts