import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { UserAddComponent } from './components/user-add/user-add.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", pathMatch:"full", component:CarComponent},
  {path:"cars/add", pathMatch:"full", component:CarAddComponent},
  {path:"cardetail", pathMatch:"full", component:CarDetailComponent},
  {path:"cars/brand/:brandId", pathMatch:"full", component:CarComponent},
  {path:"cars/color/:colorId", pathMatch:"full", component:CarComponent},
  {path:"cardetail/brand/:brandId", pathMatch:"full", component:CarDetailComponent},
  {path:"cardetail/color/:colorId", pathMatch:"full", component:CarDetailComponent},
  {path:"customers/add", component:CustomerAddComponent},
  {path:"brands", component:BrandComponent},
  {path:"colors", component:ColorComponent},
  {path:"users/add", component:UserAddComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
