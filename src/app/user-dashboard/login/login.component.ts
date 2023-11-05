import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { staticData } from 'src/assets/defines';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    public userService: UserService,
    public router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  login() {
    this.userService.getAllUsers()
    if (this.loginForm.valid) {
      const adminCredentials = this.authService.getAdminCredentials();
      if (
        this.loginForm.value.username === adminCredentials.username &&
        this.loginForm.value.password === adminCredentials.password
      ) {
        // Admin 
        this.router.navigate([staticData.ADMIN_ROUTE])
      } else {
        // Muggles
        this.router.navigate([staticData.USER_ROUTE, 1]) // defalut user
      }
    }
  }
}
