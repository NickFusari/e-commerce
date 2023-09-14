import { Component } from '@angular/core';
import { CommerceService } from '../commerce.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  toBeDisplayed: Array<Product> = new Array<Product>();

  constructor(public service: CommerceService){

    setTimeout(()=>{
      this.toBeDisplayed = this.service.products;
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
