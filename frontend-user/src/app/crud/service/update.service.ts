import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class UpdateUserService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:3000/users/';

  getUser() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


  getUserById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${id}`, user);
  }
}
