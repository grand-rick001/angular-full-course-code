import { Component, Self } from '@angular/core';
// import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService]
})
export class EmployeeComponent {
  name: string = 'John';
  constructor() { }
  // constructor(@Self() private roomSService: RoomsService) { }

  ngOnInit(): void {}
}
