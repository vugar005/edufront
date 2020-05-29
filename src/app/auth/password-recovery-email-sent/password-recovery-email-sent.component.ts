import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PASSWORD_RECOVER_EMAIL_SENT_CONSTANTS } from './password-recovery-email-sent.constants';

@Component({
  selector: 'app-password-recovery-email-sent',
  templateUrl: './password-recovery-email-sent.component.html',
  styleUrls: ['./password-recovery-email-sent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRecoveryEmailSentComponent implements OnInit {
  public constants = PASSWORD_RECOVER_EMAIL_SENT_CONSTANTS;
  constructor() { }

  ngOnInit(): void {
  }

}
