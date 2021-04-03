import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, Form} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private customerService:CustomerService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm(){
    this.customerAddForm = this.formBuilder.group({ 
      userId: ["", Validators.required],         
      companyName: ["", Validators.required],

    })
  }

  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({}, this.customerAddForm.value);
      console.log(customerModel);
      this.customerService.add(customerModel).subscribe(response=>{
      console.log(response);
      this.toastrService.success(response.message, "Başarılı");
    }, responseError=>{
      if(responseError.error.ValidationErrors.length>0){
        console.log(responseError.error.ValidationErrors);
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama Hatası"); 
        }     
      }
      
    });
    
    }else{
      this.toastrService.error("Formunuz hatalı", "Dikkat");
    } 
  }
}