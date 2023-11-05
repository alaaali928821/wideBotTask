import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { staticData } from 'src/assets/defines';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(staticData.BASE_URL);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(staticData.BASE_URL, user);
  }

  editUser(user: User): Observable<User> {
    const url = `${staticData.BASE_URL}/${user.id}`;
    return this.http.put<User>(url, user);
  }

}
