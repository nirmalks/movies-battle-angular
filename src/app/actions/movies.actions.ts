import { Action } from '@ngrx/store';
import { Movie, MovieObj, ResultsObj, MovieResult } from '../models/movie';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIE_BY_ID = 'LOAD_MOVIE_BY_ID';
export const LOAD_MOVIES_BY_ID_SUCCESS = 'LOAD_MOVIES_BY_ID_SUCCESS';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';
export const UPDATE_FORM = 'UPDATE_FORM';
export class LoadMoviesActions implements Action {
  readonly type = 'LOAD_MOVIES';

  constructor() {}
}

export class LoadMoviesSuccessActions implements Action {
  readonly type = 'LOAD_MOVIES_SUCCESS';

  constructor(public payload: MovieObj) {}
}

export class LoadMovieByIdActions implements Action {
  readonly type = 'LOAD_MOVIE_BY_ID';

  constructor() {}
}

export class LoadMovieByIdSuccessActions implements Action {
  readonly type = 'LOAD_MOVIES_BY_ID_SUCCESS';

  constructor(public payload: ResultsObj[]) {}
}

export class FormSubmitSuccessAction implements Action {
  readonly type = 'FORM_SUBMIT_SUCCESS';
  constructor(public payload: any) {}
}

export class FormSubmitErrorAction implements Action {
  readonly type = 'FORM_SUBMIT_ERROR';
  constructor(public payload: any) {}
}

export class UpdateFormAction implements Action {
  readonly type = 'UPDATE_FORM';
  constructor(public payload: any) {}
}

export type MovieActions = LoadMoviesActions | LoadMoviesSuccessActions | LoadMovieByIdActions | LoadMovieByIdSuccessActions |
FormSubmitSuccessAction | FormSubmitErrorAction | UpdateFormAction ;
