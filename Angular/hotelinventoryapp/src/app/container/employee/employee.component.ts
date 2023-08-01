import { Component, Self } from '@angular/core';
import { Router } from '@angular/router';
// import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService]
})
export class EmployeeComponent {
  name: string = 'John';
  constructor(private router: Router) { }
  // constructor(@Self() private roomSService: RoomsService) { }

  ngOnInit(): void {}

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
