import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FIELD_ERROR_TYPES, FIELD_ERORRS } from 'src/app/app.constants';

@Component({
  selector: 'setup-profile-bio',
  templateUrl: './setup-profile-bio.component.html',
  styleUrls: ['./setup-profile-bio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupProfileBioComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._initForm();
  }

  public getErrorMessage(): string {
    const { firstName, lastName, phoneNumber} = this.form.controls;
    const required = FIELD_ERROR_TYPES.required;
    if (firstName.hasError(required) || lastName.hasError(required)
    || phoneNumber.hasError(required)) {
      return FIELD_ERORRS.required;
    }
    return;
  }

  public onSubmit(): void {

  }

  private _initForm(): void {
    this.form = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required),
      'screenName': new FormControl(''),
    });
    this._changeRef.detectChanges();
  }

}
