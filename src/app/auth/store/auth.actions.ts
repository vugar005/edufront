import {createAction, props} from '@ngrx/store';
import { AuthUser } from '../models/auth-user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SecurityQuestion } from '../auth-security-questions/models/security-question.model';
import { UserProfile } from '../models/user-profile.model';


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

export const postQuestions = createAction(
    "[Auth Security Questions] Post Questions",
    props<{payload: SecurityQuestion[]}>()
);

export const postQuestionsSuccess = createAction(
    "[Auth Security Questions] Post Questions Success"
);

export const postQuestionsFailure = createAction(
    "[Auth Security Questions] Post Questions Failure",
    props<{payload: HttpErrorResponse}>()
);

export const setNewPassword = createAction(
    "[Auth Set New Password] Set New Passwrd",
    props<{payload: string}>()
);

export const setNewPasswordSuccess = createAction(
    "[Auth Set New Password] Set New Passwrd Success"
);

export const setNewPasswordFailure = createAction(
    "[Auth Set New Password] Set New Passwrd Failure",
    props<{payload: HttpErrorResponse}>()
);

export const submitUserProfile = createAction(
    "[Auth User Profile] Submit User Profile",
    props<{payload: UserProfile}>()
);

export const submitUserProfileSuccess = createAction(
    "[Auth Set New Password] Submit User Profile Success",
    props<{payload: UserProfile}>()
);

export const submitUserProfileFailure = createAction(
    "[Auth Set New Password] Submit User Profile Failure",
    props<{payload: HttpErrorResponse}>()
);

