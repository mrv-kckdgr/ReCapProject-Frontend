import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDto } from '../models/dtos/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl= "https://localhost:44358/api/customers/getcustomerdetails";

  constructor(private httpClient:HttpClient) { }

  getCustomerDetails():Observable<ListResponseModel<CustomerDetailDto>>{
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl);
  }


}
