import * as fromMovies from './../actions/movies.actions';
import {Movie , MovieObj, MovieData, ResultsObj, MovieResult} from '../models/movie';
import { ResultState } from '../models/appState';

export interface MovieState {
    movies: MovieObj;
    moviesData: Movie[];
    movieForm: Object;
    movieResults: ResultsObj[];
    result: String;
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
  movieResults: [],
  result: ''
};

function addWinner(movieData) {
  const newMovieData = movieData;
  if (movieData !== undefined) {
    if (movieData[0].movie_results[0].vote_average > movieData[1].movie_results[0].vote_average) {
      newMovieData[0].movie_results[0].winner = true;
      newMovieData[1].movie_results[0].winner = false;
    } else if (movieData[0].movie_results[0].vote_average < movieData[1].movie_results[0].vote_average) {
      newMovieData[1].movie_results[0].winner = true;
      newMovieData[0].movie_results[0].winner = false;
    } else {
      newMovieData[1].movie_results[0].winner = false;
      newMovieData[0].movie_results[0].winner = false;
    }
  }
  return newMovieData;
}

function calculateResult(movie1Result , movie2Result) {
  let result = '';
  if (movie1Result) {
    result = 'Movie1';
  } else if (movie2Result) {
    result = 'Movie2';
  } else {
    result = 'Tie';
  }
  return result;
}

export function MoviesReducer(state = initialState , action: fromMovies.MovieActions): MovieState {
  switch (action.type) {
    case fromMovies.LOAD_MOVIES_SUCCESS: {
      return state = {
          movies : action.payload,
          moviesData : action.payload.results,
          movieForm: state.movieForm,
          movieResults: state.movieResults,
          result: state.result
      };
    }

    case fromMovies.UPDATE_FORM: {
      return state = {
          movies : state.movies,
          moviesData : state.moviesData,
          movieForm: action.payload,
          movieResults: state.movieResults,
          result: state.result
      };
    }
    case fromMovies.LOAD_MOVIES_BY_ID_SUCCESS: {
      // const winner = calculateWinner(action.payload[0].movie_results , action.payload[1].movie_results);
      const modifiedPayload = addWinner(action.payload);
      const result = calculateResult(modifiedPayload[0].movie_results[0].winner
        , modifiedPayload[1].movie_results[0].winner);
      return state = {
          movies : state.movies,
          moviesData : state.moviesData,
          movieForm: state.movieForm,
          movieResults: modifiedPayload,
          result: result
      };
    }
    default: {
      return state;
    }
  }
}
