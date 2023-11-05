import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { staticData } from 'src/assets/defines';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(public router: Router) { }
  logout() {
    this.router.navigate([staticData.LOGIN_ROUTE])
  }
}
