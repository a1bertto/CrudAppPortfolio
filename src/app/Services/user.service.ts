import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http:HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/v1/users';
  }

  public getAllUserDetails(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public getUserById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  public createUserDetails(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
