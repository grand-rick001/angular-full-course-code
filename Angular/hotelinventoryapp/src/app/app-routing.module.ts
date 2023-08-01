import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeComponent } from './container/employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { loadGuard, loginGuard } from './guards/login.guard';


const routes: Routes = [
  { 
    path: 'employee',
      loadChildren: () => 
        import('./container/employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [loginGuard]
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { path: 'rooms', 
    loadChildren: () => 
      import('./rooms/rooms.module').then(m => m.RoomsModule),
    canActivate: [loginGuard],
    canLoad: [loadGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    canActivate: [loginGuard]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
