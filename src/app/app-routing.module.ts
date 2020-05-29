import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AccountCreateSuccessComponent } from './auth/account-create-success/account-create-success.component';
import { PasswordRecoveryEmailSentComponent } from './auth/password-recovery-email-sent/password-recovery-email-sent.component';
import { AuthForgotPasswordComponent } from './auth/auth-forgot-password/auth-forgot-password.component';
import { AuthSecurityQuestionsComponent } from './auth/auth-security-questions/auth-security-questions.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: AuthLoginComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'account-create-success', component: AccountCreateSuccessComponent },
  { path: 'forgot-password', component: AuthForgotPasswordComponent },
  { path: 'password-recover-email-sent', component: PasswordRecoveryEmailSentComponent },
  { path: 'security-questions', component: AuthSecurityQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
