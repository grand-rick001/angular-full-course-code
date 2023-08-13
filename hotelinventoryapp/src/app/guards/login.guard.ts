import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const loginGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLoggedIn ? true : router.navigate(['login']);
};

// export const loadGuard: CanLoadFn = (route, segments) => {
//   const role = localStorage.getItem('role');
//   const router = inject(Router);
  
//   if (role === 'ADMIN' || role === 'USER') {
//     return true;
//   } else {
//     router.navigate(['login']);
//     return false;
//   }
// }

// export const loginMatchGuard: CanMatchFn = (route, segments, matrixParams) => {
//   const role = localStorage.getItem('role');
//   const router = inject(Router);
  
//   if (role === 'ADMIN' || role === 'USER') {
//     return true;
//   } else {
//     router.navigate(['login']);
//     return false;
//   }
// }