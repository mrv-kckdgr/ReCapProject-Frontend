import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  cars: Car[] = [];
  dataLoaded = false;
  
  // carResponseModel:CarResponseModel={
  //   data:this.cars,
  //   message:"",
  //   success:true
  // };
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    console.log("Api request başladı")
    //Gelen datayı CarResponseModel' e map edeceksin.
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      console.log("Api request bitti");
      this.dataLoaded=true;
    })
    console.log("Method bitti.");
  }

}
