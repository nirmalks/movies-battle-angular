import { Component, OnInit , OnChanges, SimpleChange  } from '@angular/core';
import { Store , select } from '@ngrx/store';
import {  Movie} from '../../models/movie';
import * as movieActions from '../../actions/movies.actions';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../models/appState';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { ChangeDetectionStrategy } from '@angular/core';
import {  ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayResultComponent implements OnInit {
  moviesResult: any;
  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  populatePage() {
    this.ref.detectChanges();
  }
}
