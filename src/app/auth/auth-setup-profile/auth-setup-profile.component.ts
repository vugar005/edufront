import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SetupProfileBioComponent } from './setup-profile-bio/setup-profile-bio.component';
import { SetupProfileAddressComponent } from './setup-profile-address/setup-profile-address.component';
import { SetupProfileSecurityComponent } from './setup-profile-security/setup-profile-security.component';
import { SetupProfilePictureComponent } from './setup-profile-picture/setup-profile-picture.component';
import { UserProfile } from '../models/user-profile.model';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { submitUserProfile } from '../store/auth.actions';
import { Actions, ofType } from '@ngrx/effects';
import { AuthActions } from '../store/action-types';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-setup-profile',
  templateUrl: './auth-setup-profile.component.html',
  styleUrls: ['./auth-setup-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSetupProfileComponent implements OnInit, OnDestroy {
  @ViewChild(SetupProfileBioComponent) stepBioComponent: SetupProfileBioComponent;
  @ViewChild(SetupProfilePictureComponent) stepPictureComponent: SetupProfilePictureComponent;
  @ViewChild(SetupProfileAddressComponent) stepAddressComponent: SetupProfileAddressComponent;
  @ViewChild(SetupProfileSecurityComponent) stepSecurityComponent: SetupProfileSecurityComponent;
  public loading: boolean;
  private _onDestroy$ = new Subject<void>();
  constructor(
     private _store: Store<AppState>,
     private _actions$: Actions,
     private _router: Router,
     private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
     this._listenToSubmitProfileResponse();
  }


  ngOnDestroy(): void {
   this._onDestroy$.next();
 }

  get frmStepBio() {
    return this.stepBioComponent ? this.stepBioComponent.form : null;
 }

 get frmStepPicture() {
    return this.stepPictureComponent ? this.stepPictureComponent.form : null;
 }

 get frmStepAddress() {
    return this.stepAddressComponent ? this.stepAddressComponent.form : null;
 }

 get frmStepSecurity() {
    return this.stepSecurityComponent ? this.stepSecurityComponent.form : null;
 }

 public onSubmit(): void {
    const body: UserProfile = {
       ...this.frmStepBio.value,
       address: this.frmStepAddress.value,
       picture: this.frmStepPicture.value,
       securityQuestions: this.frmStepSecurity.value
    }
    this._setLoading(true);
    this._store.dispatch(submitUserProfile({payload: body}))
 }

 private _listenToSubmitProfileResponse(): void {
   this._actions$.pipe(
     ofType(AuthActions.submitUserProfile),
     takeUntil(this._onDestroy$)
   ).subscribe(res => {
       this._setLoading(false);
       this._router.navigateByUrl('setup-profile-success');
   });
 }

 private _setLoading(loading: boolean): void {
   this.loading = loading;
   this._changeRef.detectChanges();
 }

}
