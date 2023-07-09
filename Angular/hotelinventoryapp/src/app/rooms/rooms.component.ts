import { 
  Component,
  OnInit,
  DoCheck, 
  ViewChild, 
  ViewChildren, 
  AfterViewInit, 
  AfterViewChecked, 
  QueryList, 
  SkipSelf
 } from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from 'src/app/header/header.component';
import { RoomsService } from '../services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName: string = 'Kempinski';
  numberOfRooms: number = 10;
  hideRooms: boolean = true;
  selectedRoom!: RoomList;
  title: string = 'Room List';
  totalBytes: number = 0;
  
  stream = new Observable<number>((observer) => {
    for (let i = 0, n = 20; i < n; i++) {
      observer.next(i + 1);
    }
    observer.complete();
    observer.error('Error');
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];

  color: string = 'red';

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  // Lifecycle hooks: ngOnInit -> Called when the component initializes
  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      console.log(event);

      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request successful');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          const kbLoaded = Math.round(event.loaded / 1024);
          console.log(`Download in progress! ${kbLoaded}Kb loaded`);
          break;
        }
        case HttpEventType.Response: {
          console.log('Done!', event.body);
          break;
        }
      }
    });

    // this.stream.subscribe({
    //   next: (data) => console.log(data),
    //   complete: () => console.log('complete'),
    //   error: (err) => console.log(err)
    // });
    // this.stream.subscribe(data => console.log(data));
    // console.log(this.headerComponent+'HeaderComponent');
    this.roomsService.getRooms().subscribe(rooms => this.roomList = rooms);
    // console.log(this.roomsService.configEndpoint);
  }

  ngDoCheck(): void {
    // console.log('Do check is called');
  }

  ngAfterViewInit(): void {
    // console.log(+'HeaderComponent');
  }

  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Rooms View';
    // this.headerChildrenComponent.forEach((header => {
    //   header.title = 'ROOMS VIEWS TITLE';
    // }));

    // this.headerChildrenComponent.first.title = 'FIRST';
    // this.headerChildrenComponent.last.title = 'LAST';
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom(): void {
    const room: RoomList = {
      // roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 5900,
      photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2-21'),
      rating: 4.5
    }
    // this.roomList.push(room);

    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe(rooms => this.roomList = rooms);
  }

  editRoom(): void {
    const room: RoomList = {
      roomNumber: 3,
      roomType: 'Private Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 5900,
      photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2-21'),
      rating: 4.5
    }
    this.roomsService.editRoom(room).subscribe(rooms => this.roomList = rooms);
  }

  deleteRoom(): void {
    this.roomsService.deleteRoom('4ce6f444-02a0-44b4-b9e3-65864bdcf88c').subscribe(rooms => this.roomList = rooms);
  }
}
