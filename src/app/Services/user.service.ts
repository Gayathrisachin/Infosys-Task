import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/admission/';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
  deleteUsers(id: number) {
    return this.http.delete<User[]>(this.baseUrl + id);
  }
  // createUser(User: User) {
  //   return this.http.post(this.baseUrl, User);
  // }
  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl  + id);
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrl  + user.id, user);
  }
}
