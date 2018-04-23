import * as fromMovies from './../actions/movies.actions';
import {Movie , MovieObj, MovieData, ResultsObj, MovieResult} from '../models/movie';
import { ResultState } from '../models/appState';

export interface MovieState {
    movies: MovieObj;
    moviesData: Movie[];
    movieForm: Object;
    movieResults: ResultsObj[];
}

const initialState: MovieState = {
  movies: {
    page: 0,
    results: [],
    total_results: 0,
    total_pages: 0
  },
  moviesData: [],
  movieForm: {
    movie1: '',
    movie2: ''
  },
  movieResults: []
};

export function MoviesReducer(state = initialState , action: fromMovies.MovieActions): MovieState {
  switch (action.type) {
    case fromMovies.LOAD_MOVIES_SUCCESS: {
      return state = {
          movies : action.payload,
          moviesData : action.payload.results,
          movieForm: state.movieForm,
          movieResults: state.movieResults
      };
    }

    case fromMovies.UPDATE_FORM: {
      return state = {
          movies : state.movies,
          moviesData : state.moviesData,
          movieForm: action.payload,
          movieResults: state.movieResults
      };
    }
    case fromMovies.LOAD_MOVIES_BY_ID_SUCCESS: {
      return state = {
          movies : state.movies,
          moviesData : state.moviesData,
          movieForm: state.movieForm,
          movieResults: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
