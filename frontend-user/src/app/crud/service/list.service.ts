import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
// import { ApiResponse } from '../model/api.response';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ListUserService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = environment.baseUrl+'/api/user/';

  

  getUser() : Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

}