import { ActionReducerMap , createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromMovies from './movie.reducers';

export interface MoviesState {
  movies: fromMovies.MovieState;
}

export const reducers: ActionReducerMap<MoviesState> = {
  movies: fromMovies.MoviesReducer,
};


export const getMoviesState = createFeatureSelector('movies');

export const getTopMoviesState = createSelector(
  getMoviesState,
  (state: MoviesState) => state.movies
);
