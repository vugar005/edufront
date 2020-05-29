import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector, createReducer,
    createSelector,
    MetaReducer, on, Action
} from '@ngrx/store';
import { AuthUser } from '../models/auth-user.model';
import { AuthActions } from './action-types';
import { SecurityQuestion } from '../auth-security-questions/models/security-question.model';


export interface AuthState {
    user: AuthUser;
    isAuthenticated: boolean;
    questions: SecurityQuestion;
}

export const INITIAL_AUTH_STATE: AuthState = {
    user: null,
    isAuthenticated: false,
    questions: null
};

 const _authReducer = createReducer(

    INITIAL_AUTH_STATE,

    on(AuthActions.loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true
        }
    }),

    on(AuthActions.logout, (state, action) => {
        return {
            ...state,
            user: null,
            isAuthenticated: false
        }
    }),

);

export function authReducer(state, action: Action) {
    return _authReducer(state, action);
  }