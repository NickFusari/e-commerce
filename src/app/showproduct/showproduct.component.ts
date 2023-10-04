import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommerceService } from '../commerce.service';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent {

  selectedProduct: any = 0;
  images: Array<any> = new Array();
  index: number = 0;
  fullPrice: number = 0;
  selectedStock: number = 1;

  constructor(private route: ActivatedRoute, public service: CommerceService, public shoppingCart: ShoppingcartService){

    this.route.params.subscribe(p => this.selectedProduct = p);
    this.images = this.selectedProduct.images.split(",");
    this.fullPrice = this.selectedProduct.price;
  }

  ngOnInit(){

    this.selectOptions();
  }

  nextImage(){

    if(this.index+1 <= this.images.length-1){
      this.index +=1;
    }else{
      this.index = 0;
    }
  }

  previousImage(){

    if(this.index-1 >= 0){
      this.index -=1;
    }else{
      this.index = this.images.length-1;
    }
  }

  selectOptions(){

    let initialValue = parseInt(this.selectedProduct.stock);
    let current = 1;

    while(current != initialValue){

      let option = document.createElement('option');
      option.textContent = current.toString();
      option.setAttribute("value", current.toString());

      document.querySelector("#stockCount")?.appendChild(option);
      current += 1;
    }
  }

  getSelectedAndChangePrice(event: any){

    this.selectedStock = parseInt(event.target.value);
    this.fullPrice = this.selectedProduct.price * this.selectedStock;
  }
}
