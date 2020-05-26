import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>('/api/createUser', user);
  }

  getUserByEmail(email): Observable<User[]> {
    let params = new HttpParams();
    params = params.set('email', email);
    return this.httpClient.get<User[]>('/api/getUserByEmail', {params: params});
  }
}
