import { combineReducers } from 'redux'
import * as ReadebleAPI from '../utils/ReadebleAPI';

import {
  ADD_POST,
  REMOVE_POST,
  GET_ALL,
  GET_CATEGORIES
} from '../actions'

const initialState = { posts: [], categories: [], loading: true }

function posts(state = initialState, action) {
  const { post } = action

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
      GetAll();
      return {
        ...state,
        posts: [...state.posts]
      }
    case GET_CATEGORIES:
      GetCategories();
      return {
        ...state,
        categories: [...state.categories]
      }
    default:
      return state
  }
}

function AddPost(post) {
  ReadebleAPI.doPost(post)
    .then((post) => {
      this.props.dispatch({ type: ADD_POST, post });
      console.log('Posted successfully !!!!!!');
    });
}

function RemovePost(post) {
  ReadebleAPI.removePost(post)
    .then((post) => {
      this.props.dispatch({ type: REMOVE_POST, post });
      console.log('Post deleted successfully !!!!!!');
    });
}

function GetAll(post) {
  ReadebleAPI.getAll()
    .then((posts) => {
      this.props.dispatch({ type: GET_ALL, posts });
    });
}

function GetCategories(post) {
  ReadebleAPI.getCategories(post)
    .then((categories) => {
      this.props.dispatch({ type: GET_CATEGORIES, categories });
    });
}

export default posts