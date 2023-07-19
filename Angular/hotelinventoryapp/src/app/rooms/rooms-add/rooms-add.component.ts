import { Component } from '@angular/core';
import { RoomList } from '../room';
import { RoomsService } from 'src/app/services/rooms.service';
import { tap } from 'rxjs/operators';

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

  AddRoom() {
    this.roomsService.addRoom(this.room)
      .pipe(
        tap(data => console.log(data))
      )
      .subscribe(data => {
        this.successMessage = 'Room added successfully';
      })
  }

}
