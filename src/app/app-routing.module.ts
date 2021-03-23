import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarDetailComponent},
  {path:"cars", pathMatch:"full", component:CarComponent},
  {path:"carDetails", pathMatch:"full", component:CarDetailComponent},
  {path:"cars/brand/:brandId", pathMatch:"full", component:CarComponent},
  {path:"cars/color/:colorId", pathMatch:"full", component:CarComponent},
  {path:"customers/add", component:CustomerAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
