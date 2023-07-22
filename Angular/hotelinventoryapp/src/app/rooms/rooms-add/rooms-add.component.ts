import { Component } from '@angular/core';
import { RoomList } from '../room';
import { RoomsService } from 'src/app/services/rooms.service';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0
  }

  successMessage: string = '';

  constructor(private roomsService: RoomsService) { }

  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room)
      .subscribe((data: any) => {
        this.successMessage = 'Room added successfully';
        roomsForm.reset();
      })

    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }

}
