import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './container/employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: '**', component: NotfoundComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
