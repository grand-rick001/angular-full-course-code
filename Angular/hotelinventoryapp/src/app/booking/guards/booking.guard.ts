import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const bookingGuard = (component: BookingComponent, currentRoute: any, currentState: any, nextState: any) => {
  if (component?.bookingForm.dirty) {
    const _snackBar = inject(MatSnackBar);
    _snackBar.open('You have unsaved changes. Please save before navigating away.', 'DISCARD');
  }
};
