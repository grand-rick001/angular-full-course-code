import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;

  constructor(private router: Router) { }

  login(email: string, password: string) {
    if (email === "admin@gmail.com" && password ==="Admin") {
      this.isAdmin = true;
      this.isLoggedIn = true;
    } else if (email === "user@gmail.com" && password ==="User") {
      this.isLoggedIn = true;
      this.isAdmin = false;
    } 
    return this.isLoggedIn;
  }
}
