import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup;
  otpForm: FormGroup;
  showPassword = false;
  isOtpSent = false;
  isLoading = false;
  registeredEmail = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9\\-\\s]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      const { fullName, email, phone, password } = this.registerForm.value;
      this.registeredEmail = email;

      this.authService.register({ name: fullName, email, phone, password, role: 'company' }).subscribe({
        next: (res) => {
          this.toastService.showSuccess(res.message, 'Success');
          this.isOtpSent = true;
          this.isLoading = false;
        },
        error: (err) => {
          this.toastService.showError(err.error?.message || 'Registration failed. Please try again.', 'Error');
          this.isLoading = false;
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  onOtpSubmit() {
    if (this.otpForm.valid) {
      this.isLoading = true;
      this.authService.verifyOTP(this.registeredEmail, this.otpForm.value.otp).subscribe({
        next: (res) => {
          this.toastService.showSuccess('Account verified successfully! You can now login.', 'Verified');
          this.router.navigate(['/auth/login']);
          this.isLoading = false;
        },
        error: (err) => {
          this.toastService.showError(err.error?.message || 'OTP verification failed.', 'Error');
          this.isLoading = false;
        }
      });
    } else {
      this.otpForm.markAllAsTouched();
    }
  }
}
