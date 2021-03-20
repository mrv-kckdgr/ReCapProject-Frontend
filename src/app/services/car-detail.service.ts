import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Color_ } from '../models/color';
import { CarDetailDto } from '../models/dtos/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44358/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    let new_path = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(new_path);
  }

  getCarsByBrand(brandId:Brand):Observable<ListResponseModel<CarDetailDto>>{
    let new_path= this.apiUrl + "cars/getbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(new_path);
  }

  getCarsByColor(colorId:Color_):Observable<ListResponseModel<CarDetailDto>>{
    let new_path=this.apiUrl + "cars/getbycolor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(new_path);
  }
}
