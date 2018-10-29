import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('/users');
  }

  getUserByUsername(username: string) {
    return this.httpClient.get('/users?username=' + username);
  }
}
