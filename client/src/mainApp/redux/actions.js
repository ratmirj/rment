import { REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_FAILURE} from './actions.types.js';


const apiEndpoint = "http://react-cdp-api.herokuapp.com/movies?";

function searchMoviesByTitle(title){
  return fetch(apiEndpoint + `search=${title}`)
  .then(resp => resp.json() )
}

export function requestMovies(id) {
  return {
    type: REQUEST_MOVIES_START,
  }
}

export function STARTsearchMoviesByTitle(title) {
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

// TODO check action creators topic -> this one can stay but rewrite next ones to use helperMethod bindActionCreators
// const receiveMovies = title => dispatch => {}
export function getMoviesByTitle(title) {
  return (dispatch) => {
    dispatch(STARTsearchMoviesByTitle());

    return searchMoviesByTitle(title).then(
        result => dispatch(receiveMovies(result)),
        error => dispatch(displayError(error))
    );
  }
}
