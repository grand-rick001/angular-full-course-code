import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms/room';
import { APP_SERVICE_CONFIG, APP_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
    ) {
    // console.log('Rooms Service is Initialized');
    // console.log(this.configEndpoint);
   }

   get configEndpoint(): string {
    return this.config.apiEndpoint;
   }

  getRooms(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>('/api/rooms');
  }
}
