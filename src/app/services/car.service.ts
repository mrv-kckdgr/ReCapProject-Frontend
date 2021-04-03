import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/dtos/carDetailDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44358/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    //Gelen datayı CarResponseModel' e map edeceksin.
    let newPath=this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);      
  }

  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    let new_path = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(new_path);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    //Gelen datayı CarResponseModel' e map edeceksin.
    let newPath=this.apiUrl + "cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);      
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    //Gelen datayı CarResponseModel' e map edeceksin.
    let newPath=this.apiUrl + "cars/getbybrand?brandId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);      
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/add", car)
  }

}
