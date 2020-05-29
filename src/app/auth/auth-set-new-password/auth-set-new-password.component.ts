import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { FIELD_ERROR_TYPES, FIELD_ERORRS } from 'src/app/app.constants';
import { setNewPassword } from '../store/auth.actions';
import { AuthActions } from '../store/action-types';
import { takeUntil } from 'rxjs/operators';
import { AUTH_SET_NEW_PASSWORD } from './auth-set-new-password.constants';

@Component({
  selector: 'auth-set-new-password',
  templateUrl: './auth-set-new-password.component.html',
  styleUrls: ['./auth-set-new-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSetNewPasswordComponent implements OnInit {
  public constants = AUTH_SET_NEW_PASSWORD;
  public form: FormGroup;
  public isPasswordVisible: boolean;
  public isConfirmPasswordVisible: boolean;
  public loading: boolean;
  private _onDestroy$ = new Subject<void>();
  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._listenToSubmitResponse()
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }


  public getErrorMessage(): string {
    const { password, confirmPassword } = this.form.controls;
    const required = FIELD_ERROR_TYPES.required;
    if (password.hasError(required) || confirmPassword.hasError(required)) {
      return FIELD_ERORRS.required;
    }
    return;
  }


  public onSubmit(): void {
    const { password, confirmPassword } = this.form.controls;
    if (!this.form.valid) { return; }
    if (password.value !== confirmPassword.value) { return; }
    this._setLoading(true);
    this._store.dispatch(setNewPassword({payload: password.value}));
  }

  private _setLoading(loading: boolean): void {
    this.loading = loading;
    this._changeRef.detectChanges();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required),
    });
  }

  private _listenToSubmitResponse(): void {
    this._actions$.pipe(
      ofType(AuthActions.setNewPasswordSuccess, AuthActions.setNewPasswordFailure),
      takeUntil(this._onDestroy$)
    ).subscribe(res => {
        this._setLoading(false);
    });
  }

}
