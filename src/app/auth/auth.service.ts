import { Injectable } from '@angular/core';
import { AuthUser } from './models/auth-user.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AuthService {

    /** triggered by Auth Login Effect */
    public login(user: AuthUser): Observable<AuthUser> {
        const mockUser: AuthUser = {
            id: '123',
            username: 'vugar'
        }
        return of(mockUser)
        .pipe(
            delay(500)
        );
    }

    /** triggered by Auth Signup Effect */
    public signup(user: AuthUser): Observable<AuthUser> {
        const mockUser: AuthUser = {
            id: '123',
            username: 'vugar'
        }
        return of(mockUser)
        .pipe(
            delay(500)
        );
    }

    /** logout user */
    public logout(): void {
        localStorage.removeItem('user');
    }
}