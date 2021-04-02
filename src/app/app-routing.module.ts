import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { UserAddComponent } from './components/user-add/user-add.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", pathMatch:"full", component:CarComponent},
  {path:"cardetail", pathMatch:"full", component:CarDetailComponent},
  {path:"cars/brand/:brandId", pathMatch:"full", component:CarComponent},
  {path:"cars/color/:colorId", pathMatch:"full", component:CarComponent},
  {path:"cardetail/brand/:brandId", pathMatch:"full", component:CarDetailComponent},
  {path:"cardetail/color/:colorId", pathMatch:"full", component:CarDetailComponent},
  {path:"customers/add", component:CustomerAddComponent},
  {path:"users/add", component:UserAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
