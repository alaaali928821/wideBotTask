import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,HttpClientModule
  ],
  exports: [AdminComponent,UserComponent,LogoutComponent , LoginComponent]
})
export class UserDashboardModule { }
