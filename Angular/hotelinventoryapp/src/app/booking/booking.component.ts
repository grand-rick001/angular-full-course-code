import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm: FormGroup = new FormGroup({});

  constructor (private configService: ConfigService, private fb: FormBuilder) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
    });
  }

  addBooking() {
    console.log(this.bookingForm.value);
  }
}