import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ACCOUNT_CREATE_SUCCESS_CONSTANTS } from './account-create-success.constants';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { logout } from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'account-create-success',
  templateUrl: './account-create-success.component.html',
  styleUrls: ['./account-create-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCreateSuccessComponent implements OnInit {
  public constants = ACCOUNT_CREATE_SUCCESS_CONSTANTS;
  constructor(
    private _store: Store<AppState>,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onLogout(): void {
      this._store.dispatch(logout({}));
  }

  public onSetUpProfile(): void {
      this._router.navigateByUrl('auth/setup-profile')
  }

}
