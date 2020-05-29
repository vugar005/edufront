import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';


export const selectAuthState =
    createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
    selectAuthState,
    state => state.user
);

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.isAuthenticated

);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);

export const selectQuestions = createSelector(
    selectAuthState,
    state => state.questions
);