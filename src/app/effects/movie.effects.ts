import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';

import { MoviesService } from '../movies/movies.service';
import * as movieActions from './../actions/movies.actions';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions , private moviesService: MoviesService) {

  }

  @Effect() loadMovies$ = this.actions$
  .ofType(movieActions.LOAD_MOVIES)
  .switchMap(() => {
    return this.moviesService.fetchMovies().map(movies => new movieActions.LoadMoviesSuccessActions(movies))
  });
}
