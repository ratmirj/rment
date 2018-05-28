import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import { requestMovies, receiveMovies } from './actions';

/*
export function fetchMoviesAPI(id) {
  return fetch(`http://www.reddit.com/r/${id}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(child => child.data))
}

function* fetchMovies(action) {
   try {
      yield put(requestMovies())
      const movie = yield call(fetchMoviesAPI);
      yield put({type: "MOVIE_REQUEST_SUCCESS", list: movie.list });
   } catch (e) {
      // yield put({type: "MOVIE_REQUEST_ERROR", message: e.message});
   }
}

export function* startup() {
  yield fork(fetchMovies)
}

export default function* root() {
  yield fork(startup)
}
*/
