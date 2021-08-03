import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs/index";
// import { ApiResponse } from '../model/api.response';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { map, shareReplay } from 'rxjs/operators';



@Injectable()
export class DeleteUserService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:3000/users/';



  deleteUserById(id: any): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
    
  }
}
