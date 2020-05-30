import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap, exhaustMap, map, catchError, delay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';
import { DEFALT_API_ERROR_MSG } from 'src/app/app.constants';


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
              this._router.navigateByUrl('auth/account-create-success');
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
              this._router.navigateByUrl('auth/password-recover-email-sent');
            }),
            delay(2000),
            tap(res => {
              this._router.navigateByUrl('auth/security-questions');
            }),
            catchError(error =>{
              this._notificationService.createErrorNotificaiton(DEFALT_API_ERROR_MSG);
              return of(AuthActions.forgotPasswordFailure({ error }));
            })
          )
        )
      ), { dispatch: false }
  );

    logout$ = createEffect(() =>
      this._actions$.pipe(
        ofType(AuthActions.logout),
        tap(action => {
            this._authService.logout();
            this._router.navigateByUrl('auth/login');
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

  postQuestions$ = createEffect((): any =>
  this._actions$.pipe(
    ofType(AuthActions.postQuestions),
    exhaustMap(action =>
      this._authService.postQuestions(action.payload).pipe(
        map(res => AuthActions.postQuestionsSuccess()),
        catchError(error => {
          this._notificationService.createErrorNotificaiton(DEFALT_API_ERROR_MSG);
          return of(AuthActions.postQuestionsFailure({ payload: error }));
        })
      )
    )
  )
);

  setNewPassord$ = createEffect((): any =>
  this._actions$.pipe(
    ofType(AuthActions.setNewPassword),
    exhaustMap(action =>
      this._authService.setNewPassword(action.payload).pipe(
        map(res => AuthActions.setNewPasswordSuccess()),
        tap(res => {
          this._router.navigateByUrl('auth/set-new-password-success');
        }),
        catchError(error => {
          this._notificationService.createErrorNotificaiton(DEFALT_API_ERROR_MSG);
          return  of(AuthActions.setNewPasswordFailure({ payload: error }));
        } )
      )
    )
  )
);

  submitUserProfile$ = createEffect((): any =>
  this._actions$.pipe(
    ofType(AuthActions.submitUserProfile),
    exhaustMap(action =>
      this._authService.submitUserProfile(action.payload).pipe(
        map(res => AuthActions.submitUserProfileSuccess()),
        catchError(error => {
          this._notificationService.createErrorNotificaiton(DEFALT_API_ERROR_MSG);
          return  of(AuthActions.submitUserProfileFailure({ payload: error }));
        } )
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
