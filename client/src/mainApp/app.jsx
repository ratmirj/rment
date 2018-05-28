import React from 'react';
import { MoviesList } from './containers/moviesList/';
import { MovieSearch } from './containers/movieSearch/';

const MainApp = () => (
    <div>
      <MovieSearch/>
      <MoviesList />
    </div>
);

export { MainApp };


/*
<Routes>
  <MovieDetail />
  <MovieList />
</Routes>
*/
