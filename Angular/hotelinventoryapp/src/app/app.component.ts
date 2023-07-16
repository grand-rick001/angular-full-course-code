import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, Optional, ElementRef, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from 'src/app/services/logger.service';
import { localStorageToken } from 'src/app/token/localstorage.token';
import { InitService } from 'src/app/services/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorageToken: Storage,
    private initService: InitService
    ) {
      console.log(this.initService.config);
    }
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Hilton Hotels";

    this.localStorageToken.setItem('name', 'Hilton Hotel');
  }

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}

