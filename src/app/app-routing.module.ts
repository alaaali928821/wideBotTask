import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-dashboard/login/login.component';
import { AdminComponent } from './user-dashboard/admin/admin.component';
import { UserComponent } from './user-dashboard/user/user.component';
import { LogoutComponent } from './user-dashboard/logout/logout.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }