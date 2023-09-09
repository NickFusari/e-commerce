import { Component } from '@angular/core';
import { CommerceService } from '../commerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(public service: CommerceService){}
}
