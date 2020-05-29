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
    user: AuthUser
}

export const INITIAL_AUTH_STATE: AuthState = {
    user: null
};

 const _authReducer = createReducer(

    INITIAL_AUTH_STATE,

    on(AuthActions.login, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),

);

export function authReducer(state, action: Action) {
    return _authReducer(state, action);
  }