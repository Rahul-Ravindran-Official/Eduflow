import {Component, EventEmitter, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  @Output() successfullyResetPassword = new EventEmitter();

  constructor(private snackbar: MatSnackBar) { }

  onResetPassword(password: string, confirmPassword: string) {
    const matches = this.passwordValidators(password, confirmPassword);
    if (matches) {
      this.successfullyResetPassword.emit();
      this.showSnackbarMessage('Success');
    }
  }

  passwordValidators(password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      this.showSnackbarMessage('Passwords do not match. ');
      return false;
    }
    if (password.length === 0) {
      this.showSnackbarMessage('Password field cannot be left blank.');
      return false;
    }
    return true;
  }

  showSnackbarMessage(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 2000,
    });
  }
}
