import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  products: Array<Product> = new Array<Product>;
  gadgets: Array<Product> = new Array<Product>;
  beauty:  Array<Product> = new Array<Product>;
  groceries:  Array<Product> = new Array<Product>;
  homedeco:  Array<Product> = new Array<Product>;
  womens:  Array<Product> = new Array<Product>;
  mens:  Array<Product> = new Array<Product>;
  sunglasses:  Array<Product> = new Array<Product>;
  vehicle:  Array<Product> = new Array<Product>;

  constructor(private http: HttpClient) { 

    this.http.get('https://dummyjson.com/products?limit=100').subscribe((data) => {
      let tempData = JSON.parse(JSON.stringify(data));
      this.products = tempData.products;

      this.products.forEach(prod =>{
        if(prod.category == "smartphones" || prod.category == "laptops"){
          this.gadgets.push(prod);
          console.log(this.gadgets);
        }else if(prod.category == "fragrances"){
          this.beauty.push(prod);
        }else if(prod.category == "groceries"){
          this.groceries.push(prod);
        }else if(prod.category == "home-decoration" || prod.category == "furniture"){
          this.homedeco.push(prod);
        }else if(prod.category == "womens-dresses" || prod.category == "womens-shoes" || prod.category == "womens-watches" || prod.category == "womens-bags" || prod.category == "womens-jewellery"){
          this.womens.push(prod);
        }else if(prod.category == "mens-shirts" || prod.category == "mens-shoes" || prod.category == "mens-watches"){
          this.mens.push(prod);
        }else if(prod.category == "sunglasses"){
          this.sunglasses.push(prod);
        }else if(prod.category == "automotive" || prod.category == "motorcycle"){
          this.sunglasses.push(prod);
        }
      })
    });
  }
}
