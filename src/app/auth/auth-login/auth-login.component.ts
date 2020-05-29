import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AUTH_LOGIN_CONSTANTS } from '../auth.constants';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FIELD_ERORRS, FIELD_ERROR_TYPES } from 'src/app/app.constants';
import { Actions, ofType } from '@ngrx/effects';
import { AuthActions } from '../store/action-types';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { login } from '../store/auth.actions';
import { AuthUser } from '../models/auth-user.model';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginComponent implements OnInit {
  public constants = AUTH_LOGIN_CONSTANTS;
  public form: FormGroup;
  public isPasswordVisible: boolean;
  public loading: boolean;
  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._listenToLoginResponse()
  }

  public getErrorMessage(): string {
    const { username, password} = this.form.controls;
    const required = FIELD_ERROR_TYPES.required;
    if (username.hasError(required) || password.hasError(required)) {
      return FIELD_ERORRS.required;
    }
    return;
  }



  public onSubmit(): void {
    if (!this.form.valid) { return; }
    this._setLoading(true);
    const user: AuthUser = this.form.value;
    this._store.dispatch(login({payload: user}));
  }

  private _setLoading(loading: boolean): void {
    this.loading = loading;
    this._changeRef.detectChanges();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'remember': new FormControl(false),
    });
  }

  private _listenToLoginResponse(): void {
    this._actions$.pipe(
      ofType(AuthActions.loginSuccess, AuthActions.loginFailure),
    ).subscribe(res => {
        this._setLoading(false);
    });
  }

}
