import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/dtos/rentalDetailDto';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  rentalDetailDtos:RentalDetailDto[]=[];
  dataLoaded=false;
  
  constructor(private rentalDetailService:RentalDetailService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentalDetailService.getRentalDetails().subscribe(response =>{
      this.rentalDetailDtos=response.data;
      this.dataLoaded=true;
    })

  }

}
