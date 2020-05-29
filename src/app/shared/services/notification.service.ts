import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
    constructor(
        private _snackBar: MatSnackBar
        ) {}

    public createNotification(message: string, actionMessage: string, type: string,
        duration = 5000,
        verticalPosition: MatSnackBarVerticalPosition = 'bottom',
        horizontalPosition: MatSnackBarHorizontalPosition = 'center'
        ): void {
        this._snackBar.open(message, actionMessage, {
          duration,
          verticalPosition,
          horizontalPosition,
          panelClass: [`snackbar-${type}`]
        });
      }

      public createSuccessNotification(message: string): void {
          this.createNotification(message, 'OK', 'success');
      }

      public createErrorNotificaiton(message: string): void {
          this.createNotification(message, 'Error', 'error');
      }
}