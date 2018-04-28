import { Component, OnInit,  Input} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { filter } from 'rxjs/operators/filter';
import * as movieActions from '../actions/movies.actions';
import { Subscription } from 'rxjs/Subscription';
import { select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { MovieResult, ResultsObj, Movie } from '../models/movie';
import { Store } from '@ngrx/store';
import { ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ResultState } from '../models/appState';
import {  Output } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import {  ChangeDetectorRef } from '@angular/core';
import { DisplayResultComponent } from './display-result/display-result.component';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattleComponent implements OnInit  {
  constructor( private store: Store<ResultState>, private actionsSubject: ActionsSubject , private ref: ChangeDetectorRef) {

  }

  @ViewChild(DisplayResultComponent)
private displayResultComponent: DisplayResultComponent;
  formSuccess: Subscription;
  moviesResult: Observable<any>;
  dumRes: any = [];
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
    this.store.pipe(select(state => state.movies.movieResults)).subscribe((data: any) => {
      this.moviesResult = data;
      data.forEach((movie: any) => {
        this.dumRes.push(movie.movie_results[0]);
      });
      this.displayResultComponent.moviesResult = this.dumRes;
    });

    this.store.pipe(select(state => state.movies.result)).subscribe((data: any) => {
      this.displayResultComponent.result = data;
      this.displayResultComponent.populatePage();
    });

  }

  submitted(movie: any) {
    this.store.dispatch(new movieActions.UpdateFormAction(movie.movieObj));
  }
}
