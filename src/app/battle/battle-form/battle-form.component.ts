import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder , Validators } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Store , ActionsSubject } from '@ngrx/store/';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { filter } from 'rxjs/operators/filter';
import * as movieActions from '../../actions/movies.actions';
import { Subscription } from 'rxjs/Subscription';
import { select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { FormGroupDirective } from '@angular/forms';
import { Input } from '@angular/core';


@Component({
  selector: 'app-battle-form',
  templateUrl: './battle-form.component.html',
  styleUrls: ['./battle-form.component.css']
})
export class BattleFormComponent implements OnInit , OnChanges {

  battleForm: FormGroup;
  movies: any;

  @Input() movie: any = {
    movie1: '',
    movie2: ''
  };

  @Output() onSubmit = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.movie) {
      this.battleForm.patchValue(this.movie);
    }
    this.resetForm();
  }

  resetForm() {
    this.battleForm.reset({
      movie1: '',
      movie2: ''
    });
  }

  submit() {
    this.onSubmit.emit({movieObj: this.battleForm.value});
    this.resetForm();
  }

  createForm() {
    this.battleForm = this.fb.group({
      movie1: ['' ],
      movie2: ['' ]
    });
  }
}
