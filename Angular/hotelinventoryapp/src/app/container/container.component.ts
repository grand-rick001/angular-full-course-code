import { Component, AfterContentInit, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
// import { RoomsComponent } from 'src/app/rooms/rooms.component';
import { RoomsService } from 'src/app/services/rooms.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  // @ContentChild(RoomsComponent) rooms!: RoomsComponent;

  constructor(@Host() private roomsService: RoomsService) {}

  ngAfterContentInit(): void {
    // console.log(this.rooms);
    console.log(this.employee);
    this.employee.name = 'David';
  }
}
