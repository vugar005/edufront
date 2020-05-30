import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AUTH_PASSWORD_CHANGE_SUCCESS_CONSTANTS } from './auth-password-change-success.costants';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-password-change-success',
  templateUrl: './auth-password-change-success.component.html',
  styleUrls: ['./auth-password-change-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPasswordChangeSuccessComponent implements OnInit {
  public constants = AUTH_PASSWORD_CHANGE_SUCCESS_CONSTANTS;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._redirectToLoginPage();
  }

  private _redirectToLoginPage(): void {
    setTimeout(() => {
      this._router.navigateByUrl('auth/login');
    }, 5000);
  }

}
