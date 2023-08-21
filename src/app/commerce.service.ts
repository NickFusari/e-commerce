import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  

  constructor(private http: HttpClient) { 

  }

  getProducts(){

    this.http.get('https://dummyjson.com/products?limit=100').subscribe((data) => console.log(data));
  }
}
