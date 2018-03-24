import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map , switchMap } from 'rxjs/operators';
import { MoviesService } from '../movies/movies.service';
import * as movieActions from './../actions/movies.actions';
import { HttpResponse } from '@angular/common/http/src/response';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions , private moviesService: MoviesService) {

  }

  @Effect()
  loadMovies$ = this.actions$
  .ofType(movieActions.LOAD_MOVIES)
  .pipe(switchMap(() => {
    return this.moviesService.fetchMovies().pipe(map(movies => {
      return new movieActions.LoadMoviesSuccessActions(movies);
    }
    )
  );
  }));
}
