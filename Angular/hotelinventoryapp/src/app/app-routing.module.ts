import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeComponent } from './container/employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { 
    path: 'employee',
      loadChildren: () => 
        import('./container/employee/employee.module').then(m => m.EmployeeModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'rooms', 
    loadChildren: () => 
      import('./rooms/rooms.module').then(m => m.RoomsModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
