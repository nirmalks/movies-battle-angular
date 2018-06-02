import { Component, OnInit,  Input} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { filter } from 'rxjs/operators/filter';
import * as movieActions from '../actions/movies.actions';
import { Subscription } from 'rxjs/Subscription';
import { Actions } from '@ngrx/effects';
import { Store , ActionsSubject , select} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Output , ViewChild , AfterViewInit , ChangeDetectionStrategy ,
  ChangeDetectorRef , OnChanges  } from '@angular/core';

import { MovieResult, ResultsObj, Movie } from '../models/movie';
import { ResultState } from '../models/appState';
import { DisplayResultComponent } from './display-result/display-result.component';
import * as fromStore from '../reducers/movie.reducers';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattleComponent implements OnInit  {
  constructor( private store: Store<ResultState>, private actionsSubject: ActionsSubject , private ref: ChangeDetectorRef) {

  }

  formSuccess: Subscription;
  moviesResult: Observable<any>;
  movieResultArray: any = [];
  winner: String = '';
  ngOnInit() {
    this.formSuccess = this.actionsSubject.asObservable().pipe(
      filter(action => {
        return action.type === movieActions.LOAD_MOVIES_BY_ID_SUCCESS;}
      )
    ).subscribe(
      (action: movieActions.LoadMovieByIdSuccessActions) => {
         this.getResults();
      });
  }

  getResults() {
    this.store.pipe(select(fromStore.getTotalMovies)).subscribe((data: any) => {
      this.moviesResult = data;
      this.movieResultArray = [];
      data.forEach((movie: any) => {
        this.movieResultArray.push(movie.movie_results[0]);
      });
    });

    this.store.pipe(select(fromStore.getWinnerResult)).subscribe((data: any) => {
      this.winner = data;
    });
    this.ref.detectChanges();
  }

  submitted(movie: any) {
    this.store.dispatch(new movieActions.UpdateFormAction(movie.movieObj));
  }
}
