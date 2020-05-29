import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FORGOT_PASSWROD_CONSTANTS } from './auth-forgot-password.constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FIELD_ERROR_TYPES, FIELD_ERORRS } from 'src/app/app.constants';
import { ofType, Actions } from '@ngrx/effects';
import { AuthActions } from '../store/action-types';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { forgotPassword } from '../store/auth.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'auth-forgot-password',
  templateUrl: './auth-forgot-password.component.html',
  styleUrls: ['./auth-forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthForgotPasswordComponent implements OnInit, OnDestroy {
  public constants = FORGOT_PASSWROD_CONSTANTS;
  public form: FormGroup;
  public loading: boolean;
  private _onDestroy$ = new Subject<void>();

  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._initForm();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }

  public getErrorMessage(): string {
    const { name} = this.form.controls;
    const required = FIELD_ERROR_TYPES.required;
    if (name.hasError(required)) {
      return FIELD_ERORRS.required;
    }
    return;
  }

  public onSubmit(): void {
    if (!this.form.valid) { return; }
    this._setLoading(true);
    const name = this.form.value.name;
    this._store.dispatch(forgotPassword(name));
  }

  public _listenToResetResponse(): void {
    this._actions$.pipe(
      ofType(AuthActions.forgotPasswordSuccess, AuthActions.forgotPasswordFailure),
      takeUntil(this._onDestroy$)
    ).subscribe(res => {
        this._setLoading(false);
    });
  }

  private _setLoading(loading: boolean): void {
    this.loading = loading;
    this._changeRef.detectChanges();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      'name': new FormControl('', Validators.required)
    });
  }

}
