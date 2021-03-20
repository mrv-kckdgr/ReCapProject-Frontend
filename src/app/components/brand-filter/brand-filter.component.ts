import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandFilterService } from 'src/app/services/brand-filter.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.css']
})
export class BrandFilterComponent implements OnInit {

  brands:Brand[]=[];

  constructor(private brandFilterService:BrandFilterService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandFilterService.getBrands().subscribe(response=>{
      this.brands=response.data;
    });
  }

}
