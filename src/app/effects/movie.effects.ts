import { Injectable } from '@angular/core';
import { Actions, Effect , ofType } from '@ngrx/effects';
import { forkJoin } from 'rxjs/observable/forkJoin';
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

  @Effect()
  loadMovieByIds = this.actions$.pipe(
    ofType(movieActions.UPDATE_FORM),
    map((action: movieActions.UpdateFormAction) => action.payload),
    switchMap((movieObj) => {
      return forkJoin([this.moviesService.fetchMovieById(movieObj.movie1), this.moviesService.fetchMovieById(movieObj.movie2)]);
     }),
     map((movieResult: any) => {
       return new movieActions.LoadMovieByIdSuccessActions(movieResult);
      })
  );
}
