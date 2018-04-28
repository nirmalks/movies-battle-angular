import { MovieData,  MovieResult , ResultsObj } from './movie';

export interface AppState {
  movies: { movies: MovieData };
}

export interface ResultState {
  movies: { movieResults: ResultsObj[] , result: String };
}
