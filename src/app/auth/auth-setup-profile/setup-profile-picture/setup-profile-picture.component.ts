import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'setup-profile-picture',
  templateUrl: './setup-profile-picture.component.html',
  styleUrls: ['./setup-profile-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupProfilePictureComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      'picture': new FormControl(''),
    });
    this._changeRef.detectChanges();
  }


}
