import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(){
    this.userAddForm = this.formBuilder.group({     
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      passwordSalt: ["", Validators.required],

    })
  }

  add(){
    if(this.userAddForm.valid){
      let userModel = Object.assign({}, this.userAddForm.value);
      console.log(userModel);
      this.userService.add(userModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message, "Başarılı");
      }, responseError=>{
        if(responseError.error.ValidationErrors.lenght>0){
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