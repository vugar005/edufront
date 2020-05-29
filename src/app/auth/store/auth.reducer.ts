import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector, createReducer,
    createSelector,
    MetaReducer, on, Action
} from '@ngrx/store';
import { AuthUser } from '../models/auth-user.model';
import { AuthActions } from './action-types';


export interface AuthState {
    user: AuthUser;
    isAuthenticated: boolean;
}

export const INITIAL_AUTH_STATE: AuthState = {
    user: null,
    isAuthenticated: false
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

);

export function authReducer(state, action: Action) {
    return _authReducer(state, action);
  }