import { combineReducers } from 'redux';

import {
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_FAILURE
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
  console.log(action, state);
  switch (action.type) {
    case REQUEST_MOVIES_START:
      return Object.assign({}, state, {
        movies: {
          isFetching: true
        }
      });
    case REQUEST_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        movies: {
          isFetching: false,
          list: action.list
        }
      });
    case REQUEST_MOVIES_FAILURE:
      return Object.assign({}, state, {
          movies: {
              isFetching: false,
              error: action.e
          }
      });
    default:
      return state
  }
}

const rootReducer = combineReducers({
  movies
})

export default rootReducer
