
import { Action } from '@ngrx/store';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';

export class LoadMoviesActions implements Action {
  readonly type = 'LOAD_MOVIES';

  constructor() {}
}

export class LoadMoviesSuccessActions implements Action {
  readonly type = 'LOAD_MOVIES_SUCCESS';

  constructor(public payload: any) {}
}

export type Actions = LoadMoviesActions | LoadMoviesSuccessActions ;
