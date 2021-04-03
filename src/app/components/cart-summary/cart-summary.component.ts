import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  getCart(){
    this.cartItems=this.cartService.list();
  }

  removeFromCart(car:CarDetailDto){
    this.cartService.removeFromCart(car);
    this.toastrService.error(car.description + " sepetten silindi", "Silindi");
  }

}
