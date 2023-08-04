import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeComponent } from './container/employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';


const routes: Routes = [
  { 
    path: 'employee',
      loadChildren: () => 
        import('./container/employee/employee.module').then(m => m.EmployeeModule),
    canMatch: [loginGuard]
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { path: 'rooms', 
    loadChildren: () => 
      import('./rooms/rooms.module').then(m => m.RoomsModule),
    // canMatch: [loginGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    // canMatch: [loginGuard]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
