import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe'

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FilterPipeCarPipe } from './pipes/filter-pipe-car.pipe';
import { BrandFilterComponent } from './components/brand-filter/brand-filter.component';
import { ColorFilterComponent } from './components/color-filter/color-filter.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { UserAddComponent } from './components/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    RentalDetailComponent,
    CustomerDetailComponent,
    CustomerAddComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    FilterPipeColorPipe,
    FilterPipeBrandPipe,
    FilterPipeCarPipe,
    BrandFilterComponent,
    ColorFilterComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
