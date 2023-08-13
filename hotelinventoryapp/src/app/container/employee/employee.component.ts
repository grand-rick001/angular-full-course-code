import { Component, Self } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService]
})
export class EmployeeComponent {
  name: string = 'John';
  constructor(private router: Router, private authService: AuthService) { }
  // constructor(@Self() private roomSService: RoomsService) { }

  ngOnInit(): void {}

  logOut(): void {
    this.authService.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
