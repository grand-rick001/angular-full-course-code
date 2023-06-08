import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hotelName: string = 'Kempinski';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }

}
