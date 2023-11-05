import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminCredentials = { username: 'admin', password: '123' };
  private userCredentials = { username: 'user', password: '123' };

  getAdminCredentials() {
    return this.adminCredentials;
  }

  getUserCredentials() {
    return this.userCredentials;
  }
}
