import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FIELD_ERROR_TYPES, FIELD_ERORRS } from 'src/app/app.constants';
import { MOCK_COUNTRIES, MOCK_STATES } from './setup-profile-address.constants';
import { SelectOption } from 'src/app/shared/models/select-option.model';

@Component({
  selector: 'setup-profile-address',
  templateUrl: './setup-profile-address.component.html',
  styleUrls: ['./setup-profile-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupProfileAddressComponent implements OnInit {
  public form: FormGroup;
  public countries: SelectOption[] = MOCK_COUNTRIES;
  public states: SelectOption[] = MOCK_STATES;
  constructor(
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._initForm();
  }

  public getErrorMessage(): string {
      const { address, country, zipcode, state, city } = this.form.controls;
      const required = FIELD_ERROR_TYPES.required;
      if (address.hasError(required) || country.hasError(required)
      || zipcode.hasError(required)  || state.hasError(required) || city.hasError(required)
      ) {
        return FIELD_ERORRS.required;
      }
    return;
  }

  public onSubmit(): void {

  }

  private _initForm(): void {
    this.form = new FormGroup({
      'address': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'zipcode': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
    });
    this._changeRef.detectChanges();
  }

}
