import { inject } from '@angular/core';
import { CanActivateFn, CanLoad, CanLoadFn, Router } from '@angular/router';


export const loginGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('role');
  const router = inject(Router);
  
  if (role === 'ADMIN' || role === 'USER') {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};

export const loadGuard: CanLoadFn = (route, segments) => {
  const role = localStorage.getItem('role');
  const router = inject(Router);
  
  if (role === 'ADMIN' || role === 'USER') {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
}
