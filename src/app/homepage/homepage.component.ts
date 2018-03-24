import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { Observable } from 'rxjs/Observable';
import { Store , select } from '@ngrx/store';
import {  Movie} from './../models/movie';
import * as movieActions from './../actions/movies.actions';
import { AppState } from '../models/appState';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  movies$: Observable<Movie[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadMovies();
    this.movies$ = this.store.pipe(select(state => state.movies.movies.results));
  }

  loadMovies() {
    this.store.dispatch(new movieActions.LoadMoviesActions);
  }
}
