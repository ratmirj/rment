import { REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS } from './actions.types.js';

export function requestMovies(id) {
  return {
    type: REQUEST_MOVIES_START,
  }
}

export function receiveMovies(list) {
  return {
    type: REQUEST_MOVIES_SUCCESS,
    list
  }
}
