import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

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

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    //Gelen datayı CarResponseModel' e map edeceksin.
    let newPath=this.apiUrl + "cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);      
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    //Gelen datayı CarResponseModel' e map edeceksin.
    let newPath=this.apiUrl + "cars/getbybrand?brandId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);      
  }

  //getCarDetails():Observable<ListResponseModel<Car>>{
  //  return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl2);
  //}

}
