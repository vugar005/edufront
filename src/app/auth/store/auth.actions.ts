import {createAction, props} from '@ngrx/store';
import { AuthUser } from '../models/auth-user.model';
import { HttpErrorResponse } from '@angular/common/http';


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
    "[Auth] Logout",
    props<{}>()
);

export const forgotPassword = createAction(
    "[Auth Forgot Password] Forgot Password",
    props<{payload: string}>()
);

export const forgotPasswordSuccess = createAction(
    "[Auth Forgot Password] Forgot Password Success",
    props<{}>()
);

export const forgotPasswordFailure = createAction(
    "[Auth Forgot Password] Forgot Password Failure",
    props<{}>()
);

export const getQuestions = createAction(
    "[Auth Security Questions] Get Questions"
);

export const getQuestionsSuccess = createAction(
    "[Auth Security Questions] Get Questions Success",
    props<{payload: string[]}>()
);

export const getQuestionsFailure = createAction(
    "[Auth Security Questions] Get Questions Failure",
    props<{payload: HttpErrorResponse}>()
);

