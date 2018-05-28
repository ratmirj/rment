import { combineReducers } from 'redux';

import {
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
} from './actions.types'

const initialState = {
    movies: {
      isFetching: false,
      list: [],
      error: {}
    }
};

function movies(
  state = initialState,
  action
) {
  switch (action.type) {
    case REQUEST_MOVIES_START:
      return Object.assign({}, state, {
        movies: {
          isFetching: true
        }
      })
    case REQUEST_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        movies: {
          isFetching: false,
          list: action.list
        }
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  movies
})

export default rootReducer
