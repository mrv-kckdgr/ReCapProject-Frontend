import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerDetailService } from 'src/app/services/customer-detail.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  dataLoaded=false;

  constructor(private customerDetailService:CustomerDetailService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){


  }

}
