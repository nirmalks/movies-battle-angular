import { Directive } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';
import { FormGroupDirective } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import * as movieActions from './actions/movies.actions';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FORM_SUBMIT_SUCCESS , FORM_SUBMIT_ERROR } from './actions/movies.actions';

@Directive({
  selector: '[appConnectForm]'
})
export class ConnectFormDirective implements OnInit , OnDestroy {
  @Input('appConnectForm') val : any;
  @Output() error = new EventEmitter();
  @Output() success = new EventEmitter();
  formChange: Subscription;
  formError: Subscription;
  formSuccess: Subscription;

  constructor(private formGroupDirective: FormGroupDirective, private actions$: Actions, private store: Store<any>) { }

  ngOnInit() {
    this.store.select(state => state.movieForm).subscribe(value => {
      this.formGroupDirective.form.patchValue(value);
    });

    this.formChange = this.formGroupDirective.form.valueChanges
      .subscribe(value => {
        this.store.dispatch(new movieActions.UpdateFormAction({ payload: this.val}));
      });
    this.formSuccess = this.actions$.ofType(FORM_SUBMIT_SUCCESS)
      .subscribe(() => {
        this.formGroupDirective.form.reset();
        this.success.emit();
      });

      // this.formError = this.actions$
      // .ofType(FORM_SUBMIT_ERROR)
      // .subscribe(( payload  ) => this.error.emit(payload.error))
    }

  ngOnDestroy() {
    this.formChange.unsubscribe();
    this.formError.unsubscribe();
    this.formSuccess.unsubscribe();
  }
}
