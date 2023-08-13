import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component: BookingComponent, currentRoute: any, currentState: any, nextState: any) => {
  //   if (component && component.bookingForm && component.bookingForm.dirty) {
  //   const _snackBar = inject(MatSnackBar);
  //   _snackBar.open('You have unsaved changes. Please save before navigating away.', 'DISCARD');
  //   return false;
  // }
  return window.confirm('You have unsaved changes. Do you want to discard them?');
};
