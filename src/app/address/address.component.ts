import { Component } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  values: any = {
    postalCode: null,
    city: '',
    street: '',
    houseNumber: null
  }

  errorMessage: boolean = false;

  constructor(public shoppingCart: ShoppingcartService, private router: Router){}

  sendOrder(){

    let count = 0;
    Object.values(this.values).forEach(x => {x === '' || x === null ? count += 1 : count});
    if(count === 0){

      this.shoppingCart.orderComplete = true;
        this.shoppingCart.showList = false;
        setTimeout(()=>{
          this.shoppingCart.orderComplete = false;
          this.shoppingCart.showList = true;
          localStorage.removeItem("currentShoppingCart");
          this.router.navigate(["cart"]);
        }, 2000);
    }else{

      this.errorMessage = true;
    }
  }
}
