import { Component } from '@angular/core';
import { CommerceService } from '../commerce.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  toBeDisplayed: any = new Array<Product>();

  constructor(public service: CommerceService, private router: ActivatedRoute){

    setTimeout(()=>{
      this.router.params.subscribe(x => {
        if(x){

          this.toBeDisplayed = this.service.products;
          console.log(x)
        }else{

          this.toBeDisplayed = x;
        }
      })
    }, 1000);
  }

  checkDisplay(x: number){
    switch (x){
      case 1:
        this.toBeDisplayed = this.service.gadgets;
        break;
      case 2:
        this.toBeDisplayed = this.service.beauty;
        break;
      case 3:
        this.toBeDisplayed = this.service.groceries;
        break;
      case 4:
        this.toBeDisplayed = this.service.homedeco;
        break;
      case 5:
        this.toBeDisplayed = this.service.womens;
        break;
      case 6:
        this.toBeDisplayed = this.service.mens;
        break;
      case 7:
        this.toBeDisplayed = this.service.sunglasses;
        break;
      case 8:
        this.toBeDisplayed = this.service.products;
        break;
    }
  }
}
