import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, Optional, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(@Optional() private loggerService: LoggerService) {}
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Hilton Hotels"
  }

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}

