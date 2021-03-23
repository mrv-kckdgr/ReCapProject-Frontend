import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44358/api/"
  constructor(private httpClient:HttpClient) { }

  add(customer:Customer){
    return this.httpClient.post(this.apiUrl + "customers/add", customer)
  }
}


