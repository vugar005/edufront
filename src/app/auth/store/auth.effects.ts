import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(action =>
        this._authService.login(action.payload).pipe(
          map(user => AuthActions.loginSuccess({ payload: user})),
          tap(res => this._notificationService.createSuccessNotification('Login Success')),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

    constructor(
        private _actions$: Actions,
        private _notificationService: NotificationService,
        private _authService: AuthService
        ) { }

}
