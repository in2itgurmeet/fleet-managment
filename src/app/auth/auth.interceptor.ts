import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { ToastService } from '../shared/toast/toast.service';
import { catchError, tap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const toastService = inject(ToastService);
  const token = authService.getToken();
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    tap((event: any) => {
      if (event.type === 4) {
        const newToken = event.headers.get('x-auth-token');
        if (newToken) {
          authService.setToken(newToken);
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        toastService.showError('Session expired. Please Login again.', 'Authentication Failed');
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};
