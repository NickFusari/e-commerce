import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  products: Array<Product> = new Array<Product>; 

  constructor(private http: HttpClient) { 

    this.http.get('https://dummyjson.com/products?limit=100').subscribe((data) => {
      let tempData = JSON.parse(JSON.stringify(data));
      this.products = tempData.products;
      console.log(this.products);
    });
  }

}
