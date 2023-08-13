import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const roomGuard: CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAdmin;
};
