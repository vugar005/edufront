import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { logout } from '../store/auth.actions';
import { SETUP_PROFILE_SUCCESS_CONSTANTS } from './setup-profile-success.constants';

@Component({
  selector: 'auth-setup-profile-success',
  templateUrl: './auth-setup-profile-success.component.html',
  styleUrls: ['./auth-setup-profile-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSetupProfileSuccessComponent implements OnInit {

  public constants = SETUP_PROFILE_SUCCESS_CONSTANTS;
  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  public onLogout(): void {
      this._store.dispatch(logout({}));
  }

}
