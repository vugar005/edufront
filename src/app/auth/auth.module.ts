import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducer';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountCreateSuccessComponent } from './account-create-success/account-create-success.component';
import { AuthForgotPasswordComponent } from './auth-forgot-password/auth-forgot-password.component';
import { PasswordRecoveryEmailSentComponent } from './password-recovery-email-sent/password-recovery-email-sent.component';
import { AuthSecurityQuestionsComponent } from './auth-security-questions/auth-security-questions.component';
import { AuthSetNewPasswordComponent } from './auth-set-new-password/auth-set-new-password.component';
import { AuthPasswordChangeSuccessComponent } from './auth-password-change-success/auth-password-change-success.component';
import { AuthSetupProfileComponent } from './auth-setup-profile/auth-setup-profile.component';
import { SetupProfileBioComponent } from './auth-setup-profile/setup-profile-bio/setup-profile-bio.component';
import { SetupProfilePictureComponent } from './auth-setup-profile/setup-profile-picture/setup-profile-picture.component';
import { SetupProfileAddressComponent } from './auth-setup-profile/setup-profile-address/setup-profile-address.component';
import { SetupProfileSecurityComponent } from './auth-setup-profile/setup-profile-security/setup-profile-security.component';
import { AuthSetupProfileSuccessComponent } from './auth-setup-profile-success/auth-setup-profile-success.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    AccountCreateSuccessComponent,
    AuthForgotPasswordComponent,
    PasswordRecoveryEmailSentComponent,
    AuthSecurityQuestionsComponent,
    AuthSetNewPasswordComponent,
    AuthPasswordChangeSuccessComponent,
    AuthSetupProfileComponent,
    SetupProfileBioComponent,
    SetupProfilePictureComponent,
    SetupProfileAddressComponent,
    SetupProfileSecurityComponent,
    AuthSetupProfileSuccessComponent,
  ]
})
export class AuthModule { }
