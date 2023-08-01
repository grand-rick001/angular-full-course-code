import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor (private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    if (this.email === "admin@gmail.com" && this.password ==="Admin") {
      localStorage.setItem('role', 'ADMIN');
      this.router.navigate(['employee']);
    } else if (this.email === "user@gmail.com" && this.password ==="User") {
      localStorage.setItem('role', 'USER');
      this.router.navigate(['employee']);
    } 
  }

}
