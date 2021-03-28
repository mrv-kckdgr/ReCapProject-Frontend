import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44358/api/";
  constructor(private httpClient: HttpClient) { }

  add(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "users/add", user);
  }
}
