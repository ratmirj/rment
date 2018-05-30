import { REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_FAILURE} from './actions.types.js';


const apiEndpoint = "http://react-cdp-api.herokuapp.com/movies?";

function searcgMoviesByTitle(title){
  return fetch(apiEndpoint + `search=${title}`)
}

export function requestMovies(id) {
  return {
    type: REQUEST_MOVIES_START,
  }
}

export function searchMoviesByTitle(title) {
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

export function displayError(error) {
    return {
        type: REQUEST_MOVIES_FAILURE,
        error
    }

}

export function reciveMoviesByTitle(title) {
    return searcgMoviesByTitle(title).then(
        result => dispatch(receiveMovies(result)),
        error => dispatch(displayError(error))
    );

}