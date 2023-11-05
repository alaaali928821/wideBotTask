import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { staticData } from 'src/assets/defines';

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
    public router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  login() {
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
        this.router.navigate([staticData.USER_ROUTE])
      }
    }
  }
}
