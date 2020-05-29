import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap, exhaustMap, map, catchError, delay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
      this._actions$.pipe(
        ofType(AuthActions.login),
        exhaustMap(action =>
          this._authService.login(action.payload).pipe(
            map(user => AuthActions.loginSuccess({ payload: user})),
            tap(res => {
              localStorage.setItem('user', JSON.stringify(action.payload));
              this._notificationService.createSuccessNotification('Login Success');
            }),
            catchError(error => of(AuthActions.loginFailure({ error })))
          )
        )
      )
  );

    singup$ = createEffect(() =>
      this._actions$.pipe(
        ofType(AuthActions.signup),
        exhaustMap(action =>
          this._authService.signup(action.payload).pipe(
            map(user => AuthActions.signupSuccess({ payload: user})),
            tap(res => {
              localStorage.setItem('user', JSON.stringify(action.payload));
              this._notificationService.createSuccessNotification('Singup Success');
              this._router.navigateByUrl('account-create-success');
            }),
            catchError(error => of(AuthActions.signupFailure({ error })))
          )
        )
      )
  );

    forgotPassword$ = createEffect(() =>
      this._actions$.pipe(
        ofType(AuthActions.forgotPassword),
        exhaustMap(action =>
          this._authService.forgotPassword(action.payload).pipe(
            tap(res => {
              this._router.navigateByUrl('password-recover-email-sent');
            }),
            delay(1000),
            tap(res => {
              this._router.navigateByUrl('security-questions');
            }),
            catchError(error => of(AuthActions.forgotPasswordFailure({ error })))
          )
        )
      ), { dispatch: false }
  );

    logout$ = createEffect(() =>
      this._actions$.pipe(
        ofType(AuthActions.logout),
        tap(action => {
            this._authService.logout();
            this._router.navigateByUrl('login');
          }
        )
      ), { dispatch: false }
  );

  getQuestions$ = createEffect((): any =>
  this._actions$.pipe(
    ofType(AuthActions.getQuestions),
    exhaustMap(action =>
      this._authService.getQuestions().pipe(
        map(res => AuthActions.getQuestionsSuccess({payload: res})),
        catchError(error => of(AuthActions.getQuestionsFailure({ payload: error })))
      )
    )
  )
);

    constructor(
        private _actions$: Actions,
        private _notificationService: NotificationService,
        private _authService: AuthService,
        private _router: Router
        ) { }

}
