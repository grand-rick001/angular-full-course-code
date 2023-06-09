import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hotelName: string = 'Kempinski';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList [] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2-21'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 2000,
      photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2-21'),
      rating: 3.4
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2-21'),
      rating: 2.6
    }
  ]

  color: string = 'red';

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }

}
