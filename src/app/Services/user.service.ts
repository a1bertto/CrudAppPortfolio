import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http:HttpClient) {
    const API_BASE_URL = 'http://localhost:8080/api/v1';
    this.usersUrl = `${API_BASE_URL}/users`;
  }

  public getAllUserDetails(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


  public getUserById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  public createUserDetails(user: User): Observable<String> {
    return this.http.post(this.usersUrl, user,{ responseType: 'text' });
  }
  public deleteUserById(id: number):Observable<String>{
    const url = `${this.usersUrl}/${id}`;
     return this.http.delete(url,{ responseType: 'text' });
  }

  public updateUserDetails(id: number, user: User): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.put<User>(url, user);
  }

}
