import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class CreateUserService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:3000/users/';


    createUser(user: User): Observable<any> {
      return this.http.post<any>(this.baseUrl, user);
    }

}
