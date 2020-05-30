import { Injectable } from '@angular/core';
import { AuthUser } from './models/auth-user.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SecurityQuestion } from './auth-security-questions/models/security-question.model';
import { UserProfile } from './models/user-profile.model';

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

    public forgotPassword(payload: string): Observable<boolean> {
        return of(true)
        .pipe(
            delay(500)
        );
    }

    /** logout user */
    public logout(): void {
        localStorage.removeItem('user');
    }

    /** get questions for password recovery */
    public getQuestions(): Observable<string[]> {
        return of(['your favorite singer', 'your favorite stock'])
        .pipe(
            delay(500)
        );
    }

    /** post questions and answers for password recovery */
    public postQuestions(data: SecurityQuestion[]): Observable<boolean> {
        return of(true)
        .pipe(
            delay(500)
        );
    }

    /** sets new password for user */
    public setNewPassword(data: string): Observable<boolean> {
        return of(true)
        .pipe(
            delay(500)
        );
    }

    /** submit user profile */
    public submitUserProfile(data: UserProfile): Observable<boolean> {
        return of(true)
        .pipe(
            delay(500)
        );
    }
}