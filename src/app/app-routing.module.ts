import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", pathMatch:"full", component:CarComponent},
  {path:"cars/brand/:brandId", pathMatch:"full", component:CarComponent},
  {path:"cars/color/:colorId", pathMatch:"full", component:CarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
