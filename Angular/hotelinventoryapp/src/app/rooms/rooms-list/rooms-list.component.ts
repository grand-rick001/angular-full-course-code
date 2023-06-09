import { Component, OnInit, Input } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  @Input({required: true}) rooms: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {}

}
