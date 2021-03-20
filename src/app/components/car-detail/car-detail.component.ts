import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color_ } from 'src/app/models/color';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetailDtos:CarDetailDto[]=[];
  dataLoaded=false;
  filterText="";
  brands:Brand[]=[];

  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }


  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response =>{
      this.carDetailDtos=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:Brand){
    this.carDetailService.getCarsByBrand(brandId).subscribe(response => {
      this.carDetailDtos=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:Color_){
    this.carDetailService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetailDtos=response.data;
      this.dataLoaded=true;
    })
  }

}