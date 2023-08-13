import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { CustomValidator } from './validators/custom-validators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm!: FormGroup;
  

  constructor (
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService, 
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    let roomId: string = '';
    this.route.paramMap.pipe(
      map((params: ParamMap) =>  params.get('roomid')!)
    ).subscribe((data) => roomId = data);

    this.bookingForm = this.fb.group({
      roomId: new FormControl(roomId, { validators: [Validators.required] }),
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
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialCharacters('*')]],
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
      updateOn: 'change',
      validators: [CustomValidator.validateDate]
    }
    );
    

    // this.getBookingData();

    // this.bookingForm.valueChanges
    //   .pipe(
    //     exhaustMap((data) => {
    //       return this.bookingService.bookRoom(data);
    //     }))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => {
    //     // console.log(data);
    //   });
    // });
  }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(BookingComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

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
      roomId: '0101',
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