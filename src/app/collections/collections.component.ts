import { Component } from '@angular/core';
import { CommerceService } from '../commerce.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {

  
  constructor(public service: CommerceService){
  }
}
