import * as fromMovies from './../actions/movies.actions';
import {Movie , MovieObj, MovieData} from '../models/movie';

export interface MovieState {
    movies: MovieObj;
    moviesData: Movie[];
}

const initialState: MovieState = {
  movies: {
    page: 0,
    results: [],
    total_results: 0,
    total_pages: 0
  },
  moviesData: []
};

export function MoviesReducer(state = initialState , action: fromMovies.MovieActions): MovieState {
  switch (action.type) {
    case fromMovies.LOAD_MOVIES_SUCCESS: {
      return state = {
          movies : action.payload,
          moviesData : action.payload.results
      };
    }
    default: {
      return state;
    }
  }
}
