import { Component, AfterContentInit, ContentChild } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
// import { RoomsComponent } from 'src/app/rooms/rooms.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  // @ContentChild(RoomsComponent) rooms!: RoomsComponent;

  ngAfterContentInit(): void {
    // console.log(this.rooms);
    console.log(this.employee);
    this.employee.name = 'David';
  }
}
