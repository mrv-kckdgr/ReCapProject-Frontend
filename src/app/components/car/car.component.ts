import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
declare let alertify:any;

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  cars: Car[] = [];
  dataLoaded = false;
  filterText="";
  
  // carResponseModel:CarResponseModel={
  //   data:this.cars,
  //   message:"",
  //   success:true
  // };
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else{
        this.getCars();
      }
    })
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

  getCarsByBrand(brandId:number){
    console.log("Api request başladı")
    //Gelen datayı CarResponseModel' e map edeceksin.
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      console.log("Api request bitti");
      this.dataLoaded=true;
    })
    console.log("Method bitti.");    
  }

  getCarsByColor(colorId:number){
    console.log("Api request başladı")
    //Gelen datayı CarResponseModel' e map edeceksin.
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      console.log("Api request bitti");
      this.dataLoaded=true;
    })
    console.log("Method bitti.");
  }

  addToCart(car:Car){
    if(car.id===1){
      this.toastrService.error("Hata", "Bu ürün sepete eklenemez!!");
    }else{
      console.log(car);
      this.toastrService.success("Sepete eklendi", car.description);
      this.cartService.addToCart(car);
    }
    
  }

}