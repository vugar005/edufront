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
    "[Login Page] User Login Success",
    props<{}>()
);

export const signup = createAction(
    "[Signup Page] User signup",
    props<{payload: AuthUser}>()
);

export const signupSuccess = createAction(
    "[Signup Page] User signup Success",
    props<{payload: AuthUser}>()
);

export const signupFailure = createAction(
    "[Signup Page] User signup Failure",
    props<{}>()
);

export const logout = createAction(
    "[Auth]  Logout",
    props<{}>()
);

