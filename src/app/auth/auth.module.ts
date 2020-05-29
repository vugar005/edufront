import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthSignupComponent
  ]
})
export class AuthModule { }
