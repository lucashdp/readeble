import { combineReducers } from 'redux'

import {
    ADD_POST,
    REMOVE_POST
} from '../actions'

const initialState = { posts: [] }

function posts (state = initialState, action) {
  const { post } = action

  switch (action.type) {
    case ADD_POST :
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
    default :
      return state
  }
}

export default posts