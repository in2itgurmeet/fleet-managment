import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastService } from '../../shared/toast/toast.service';
@Component({
  selector: 'app-password-recovery',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './password-recovery.html',
  styleUrl: './password-recovery.scss',
})
export class PasswordRecovery {
  step: 'email' | 'otp' | 'reset' = 'email';
  showPassword = false;
  isLoading = false;

  emailForm: FormGroup;
  otpForm: FormGroup;
  resetForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  submitEmail() {
    if (this.emailForm.valid) {
      this.isLoading = true;
      this.authService.forgotPassword(this.emailForm.value.email).subscribe({
        next: (res) => {
          this.toastService.showSuccess(res.message, 'OTP Sent');
          this.step = 'otp';
          this.isLoading = false;
        },
        error: (err) => {
          this.toastService.showError(err.error?.message || 'Failed to send OTP.', 'Error');
          this.isLoading = false;
        }
      });
    } else {
      this.emailForm.markAllAsTouched();
    }
  }

  submitOtp() {
    if (this.otpForm.valid) {
      this.step = 'reset';
      this.toastService.showSuccess('OTP verified, please enter your new password.', 'Verified');
    } else {
      this.otpForm.markAllAsTouched();
    }
  }

  submitReset() {
    if (this.resetForm.valid) {
      this.isLoading = true;
      const data = {
        email: this.emailForm.value.email,
        otp: this.otpForm.value.otp,
        newPassword: this.resetForm.value.password
      };
      this.authService.resetPassword(data).subscribe({
        next: (res) => {
          this.toastService.showSuccess('Password reset successfully! You can now login.', 'Success');
          this.step = 'email';
          this.emailForm.reset();
          this.otpForm.reset();
          this.resetForm.reset();
          this.isLoading = false;
        },
        error: (err) => {
          this.toastService.showError(err.error?.message || 'Failed to reset password.', 'Error');
          this.isLoading = false;
        }
      });
    } else {
      this.resetForm.markAllAsTouched();
    }
  }

  setStep(newStep: 'email' | 'otp' | 'reset') {
    this.step = newStep;
  }
}
