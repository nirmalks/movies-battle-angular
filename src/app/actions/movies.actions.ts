import { Action } from '@ngrx/store';
import { MovieObj } from '../models/movie';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';

export class LoadMoviesActions implements Action {
  readonly type = 'LOAD_MOVIES';

  constructor() {}
}

export class LoadMoviesSuccessActions implements Action {
  readonly type = 'LOAD_MOVIES_SUCCESS';

  constructor(public payload: MovieObj) {}
}

export type MovieActions = LoadMoviesActions | LoadMoviesSuccessActions ;
