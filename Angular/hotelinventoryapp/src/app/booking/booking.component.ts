import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm: FormGroup = new FormGroup({});

  constructor (private configService: ConfigService, private fb: FormBuilder, private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: new FormControl('', { validators: [Validators.required] }),
      guestEmail: [
        '', 
        { 
          updateOn: 'blur',
          validators: [Validators.required, Validators.email]
        }
      ],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [
        '',
        { 
        updateOn: 'blur',
        }
      ],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: [''],
        zipCode: ['']
      }),
      guests: this.fb.array([
        this.addGuestControl()
      ]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] })
    },
    {
      updateOn: 'change'
    }
    );

    this.getBookingData();

    this.bookingForm.valueChanges
      .pipe(
        exhaustMap((data) => {
          return this.bookingService.bookRoom(data);
        }))
      .subscribe((data) => {
        console.log(data);
      });

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => {
    //     // console.log(data);
    //   });
    // });
  }

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  addBooking() {
    console.log(this.bookingForm.value);
    // this.bookingForm.reset(
    //   {
    //     roomId: '',
    //     guestEmail: '',
    //     checkinDate: '',
    //     checkoutDate: '',
    //     bookingStatus: '',
    //     bookingAmount: '',
    //     bookingDate: '',
    //     mobileNumber: '',
    //     guestName: '',
    //     address: {
    //       addressLine1: '',
    //       addressLine2: '',
    //       city: '',
    //       state: '',
    //       country: '',
    //       zipCode: ''
    //     },
    //     guests: [
    //       {
    //         guestName: '',
    //         age: ''
    //       }
    //     ],
    //     tnc: false
    //   }
    // );
    // this.bookingService.bookRoom(this.bookingForm.value).subscribe((data) => {
    //   console.log(data);
    // });
  }

  addGuest() {
    this.guests.push(
      this.addGuestControl()
    );
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport() {
    if (this.bookingForm.contains('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }

  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '2',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('10-Feb-2020'),
      // checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
      },
      guests: [
        {
          guestName: '',
          age: ''
        }
      ],
      tnc: false
    })
  }

  addGuestControl(): FormGroup {
    return this.fb.group({
      guestName: ['', [Validators.required]],
      age: new FormControl('')
    });
  }
}