import { CanActivateChildFn } from '@angular/router';

export const roomGuard: CanActivateChildFn = (route, state) => {
  if (localStorage.getItem('role') === 'ADMIN') {
    return true;
  } else {
    return false;
  }
};
