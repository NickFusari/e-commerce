import { Component } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
import { ShoppingCart } from '../shopping-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  currentList: ShoppingCart = new ShoppingCart;
  totalAmount: number = 0;
  isEmpty: boolean = false;

  constructor(public shoppingCart: ShoppingcartService){}

  ngOnInit(){

    this.currentList = JSON.parse(localStorage.getItem("currentShoppingCart") ?? "[]");
    if(localStorage.getItem("currentShoppingCart") === null || this.currentList.orders.length === 0){

      this.isEmpty = true;
    }else{

      for(let x in this.currentList.orders){

        this.totalAmount += this.currentList.orders[x].totalPrice;
      }
    }

  }
}
