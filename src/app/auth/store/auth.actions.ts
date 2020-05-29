import {createAction, props} from '@ngrx/store';
import { AuthUser } from '../models/auth-user.model';


export const login = createAction(
    "[Login Page] User Login",
    props<{user: AuthUser}>()
);

