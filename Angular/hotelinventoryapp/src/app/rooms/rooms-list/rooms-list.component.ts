import { ChangeDetectionStrategy, Component, OnInit, SimpleChanges, OnChanges, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented');
    if (changes['title']) {
      this.title = changes['title'].currentValue.toLowerCase();
    }
    console.log('on changes is called');
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('on destroy is called');
  }

}
