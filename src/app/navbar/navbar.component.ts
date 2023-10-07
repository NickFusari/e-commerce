import { Component } from '@angular/core';
import { ProfilemanagementService } from '../profilemanagement.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrollablePage: boolean = true;

  constructor(public usermanagement: ProfilemanagementService){}

  menuOpen(){

    this.scrollablePage = this.scrollablePage ? this.scrollablePage = false : this.scrollablePage = true;

    if(!this.scrollablePage){

      this.usermanagement.lockScreen();
    }else{

      window.onscroll = function(){};
    }
  }
}
