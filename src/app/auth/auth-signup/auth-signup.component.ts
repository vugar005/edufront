import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AUTH_SIGNUP_CONSTANTS } from '../auth.constants';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { FIELD_ERORRS, FIELD_ERROR_TYPES } from 'src/app/app.constants';
import { AuthActions } from '../store/action-types';
import { AuthUser } from '../models/auth-user.model';
import { signup } from '../store/auth.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSignupComponent implements OnInit, OnDestroy {

  public constants = AUTH_SIGNUP_CONSTANTS;
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
    this._listenToLoginResponse()
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }

  public getErrorMessage(): string {
    const { username, email, password, confirmPassword } = this.form.controls;
    const required = FIELD_ERROR_TYPES.required;
    const emailValidator = FIELD_ERROR_TYPES.email;
    if (username.hasError(required) || email.hasError(required)
        || password.hasError(required) || confirmPassword.hasError(required)
        ) {
      return FIELD_ERORRS.required;
    }
    if (email.hasError(emailValidator)) {
      return FIELD_ERORRS.email
    }
    return;
  }

  public _listenToLoginResponse(): void {
    this._actions$.pipe(
      ofType(AuthActions.signupSuccess, AuthActions.signupFailure),
      takeUntil(this._onDestroy$)
    ).subscribe(res => {
        this._setLoading(false);
    });
  }

  public onSubmit(): void {
    if (!this.form.valid) { return; }
    this._setLoading(true);
    const user: AuthUser = this.form.value;
    this._store.dispatch(signup({payload: user}));
  }

  private _setLoading(loading: boolean): void {
    this.loading = loading;
    this._changeRef.detectChanges();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required),
      'remember': new FormControl(false),
    });
  }


}
