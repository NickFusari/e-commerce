import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ProductsComponent } from './products/products.component';

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

  constructor(private http: HttpClient, private router: Router) { 

    this.http.get('https://dummyjson.com/products?limit=100').subscribe((data) => {
      let tempData = JSON.parse(JSON.stringify(data));
      this.products = tempData.products;

      this.products.forEach(prod =>{
        if(prod.category == "smartphones" || prod.category == "laptops"){
          this.gadgets.push(prod);
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
        }
      })
    });
  }

  openProduct(id: Product){

    this.router.navigate(["product", id]);
    this.reloadPage();
  }

  reloadPage() {
    setTimeout(()=>{
      window.onbeforeunload = function() {window.scrollTo(0,0);};
      window.location.reload();
    }, 100);
}

fetchMore(x: Array<Product>){

  this.router.navigate(["products", x]);
  this.reloadPage();
}

}
