import { Component, OnInit, ViewChild } from '@angular/core';
import { SetupProfileBioComponent } from './setup-profile-bio/setup-profile-bio.component';
import { SetupProfileAddressComponent } from './setup-profile-address/setup-profile-address.component';
import { SetupProfileSecurityComponent } from './setup-profile-security/setup-profile-security.component';
import { SetupProfilePictureComponent } from './setup-profile-picture/setup-profile-picture.component';

@Component({
  selector: 'app-auth-setup-profile',
  templateUrl: './auth-setup-profile.component.html',
  styleUrls: ['./auth-setup-profile.component.scss']
})
export class AuthSetupProfileComponent implements OnInit {
  @ViewChild(SetupProfileBioComponent) stepBioComponent: SetupProfileBioComponent;
  @ViewChild(SetupProfilePictureComponent) stepPictureComponent: SetupProfilePictureComponent;
  @ViewChild(SetupProfileAddressComponent) stepAddressComponent: SetupProfileAddressComponent;
  @ViewChild(SetupProfileSecurityComponent) stepSecurityComponent: SetupProfileSecurityComponent;
  constructor() { }

  ngOnInit(): void {
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


}
