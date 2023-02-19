import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = "http://localhost:4000"

  constructor(private http: HttpClient) { 
  }

  createUser(user: User){
    return this.http.post(`${this.API_URL}/create`, user)
  }

  signIn(user: User){
    return this.http.post(`${this.API_URL}/signIn`, user)
  }

}
