import { Injectable } from '@angular/core';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';
import { Singularorder } from './singularorder';
import { Profile } from './profile';
import { ProfilemanagementService } from './profilemanagement.service';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  currentCart: ShoppingCart = new ShoppingCart;
  confirmed: boolean = false;
  orderComplete: boolean = false;
  showList: boolean = true;
  emptyCart: boolean = false;

  constructor(private profilemanagement: ProfilemanagementService) { }


  ngOnInit(){

    let localShoppingCart = localStorage.getItem("currentShoppingCart");
    if(localShoppingCart !== null){

      this.currentCart = JSON.parse(localShoppingCart);
    }
  }

  refreshShoppingCart(){

    if(localStorage.getItem("currentShoppingCart") !== null){
      this.currentCart = JSON.parse(localStorage.getItem("currentShoppingCart") ?? "[]");
    }
  }

  updateCart(){

    localStorage.setItem("currentShoppingCart",JSON.stringify(this.currentCart));
  }

  addToCart(prod: Product, amount: number){

    this.refreshShoppingCart();

    let currentOrder: Singularorder = new Singularorder;
    currentOrder.product = prod;
    currentOrder.quantity = amount;
    currentOrder.totalPrice = amount * prod.price;
    currentOrder.id = this.currentCart.orders.length;

    this.currentCart.orders.push(currentOrder);
    this.updateCart();
    this.confirmMessage();
  }

  confirmMessage(){

    this.confirmed = true;

    setTimeout(()=>{
      this.confirmed = false;
    }, 3000);
  }

  removeFromCart(ord: Singularorder){

    this.refreshShoppingCart();
    let correctFile = new Singularorder();
    this.currentCart.orders.map(x => {
      if(x.id === ord.id){
        correctFile = x;
      }
    })
    let index = this.currentCart.orders.indexOf(correctFile);
    console.log(index);
    this.currentCart.orders.splice(index, 1);
    this.updateCart()
    window.scrollTo(0,0);
    window.location.reload();
  }


  order(){

    if(localStorage.getItem("currentShoppingCart") !== null){
      let finalList: ShoppingCart = JSON.parse(localStorage.getItem("currentShoppingCart") ?? "[]");
      this.profilemanagement.loggedProfile = JSON.parse(localStorage.getItem("currentUser") ?? "[]");
      this.profilemanagement.loggedProfile.orders.push(finalList);
      localStorage.removeItem("currentShoppingCart");
      this.orderComplete = true;
      this.showList = false;
      setTimeout(()=>{
        this.profilemanagement.updateProfile();
      }, 2000);
    }else{
      this.emptyCart = true;
    }
  }
}
