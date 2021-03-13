import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { CustomerDetailResponseModel } from '../models/dtos/customerDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl= "https://localhost:44358/api/customers/getcustomerdetails";

  constructor(private httpClient:HttpClient) { }

  getCustomerDetails():Observable<CustomerDetailResponseModel>{
    return this.httpClient.get<CustomerDetailResponseModel>(this.apiUrl);
  }


}
