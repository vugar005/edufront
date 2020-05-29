import { Component, OnInit } from '@angular/core';
import { ACCOUNT_CREATE_SUCCESS_CONSTANTS } from './account-create-success.constants';

@Component({
  selector: 'app-account-create-success',
  templateUrl: './account-create-success.component.html',
  styleUrls: ['./account-create-success.component.scss']
})
export class AccountCreateSuccessComponent implements OnInit {
  public constants = ACCOUNT_CREATE_SUCCESS_CONSTANTS;
  constructor() { }

  ngOnInit(): void {
  }

}
