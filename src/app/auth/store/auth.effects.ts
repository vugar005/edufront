import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(action =>
        this._authService.login(action.payload).pipe(
          map(user => AuthActions.loginSuccess({ payload: user})),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

    constructor(
        private _actions$: Actions,
        private router: Router,
        private _authService: AuthService
        ) { }

}
