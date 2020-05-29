import {createAction, props} from '@ngrx/store';
import { AuthUser } from '../models/auth-user.model';


export const login = createAction(
    "[Login Page] User Login",
    props<{payload: AuthUser}>()
);

export const loginSuccess = createAction(
    "[Login Page] User Login Success",
    props<{payload: AuthUser}>()
);

export const loginFailure = createAction(
    "[Login Page] User Login Failure",
    props<{}>()
);

