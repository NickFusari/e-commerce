import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent {

  selectedProduct: any = 0;
  images: Array<any> = new Array();
  index: number = 0;

  constructor(private route: ActivatedRoute){

    this.route.params.subscribe(p => this.selectedProduct = p);
    this.images = this.selectedProduct.images.split(",");
  }

  ngOnInit(){

    console.log(this.selectedProduct);
    console.log(this.images);
    console.log(this.index);
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
}
