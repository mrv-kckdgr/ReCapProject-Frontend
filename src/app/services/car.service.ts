import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44358/api/cars/getall";
  apiUrl2="https://localhost:44358/api/cars/getcardetails";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    //Gelen datayı CarResponseModel' e map edeceksin.
    return this.httpClient.get<CarResponseModel>(this.apiUrl);      
  }

  getCarDetails():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl2);
  }

}
