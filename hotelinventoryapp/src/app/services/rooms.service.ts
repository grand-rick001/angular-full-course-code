import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms/room';
import { APP_SERVICE_CONFIG, APP_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [];

  url: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
    ) {
    // console.log('Rooms Service is Initialized');
    // console.log(this.configEndpoint);
   }

  // headers = new HttpHeaders({'token1': '12345dksdks'}).append('token2', '12345dksdks').append('token3', '12345dksdks');

   getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
   );

   get configEndpoint(): string {
    return this.config.apiEndpoint;
   }

  getRooms(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', this.url,
     {
      reportProgress: true
    });
    return this.http.request(request);
  }
}
