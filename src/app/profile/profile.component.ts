import { Component } from '@angular/core';
import { ProfilemanagementService } from '../profilemanagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  constructor(public usermanagement: ProfilemanagementService, private router: Router){

    if(usermanagement.isLogged()){

      this.router.navigate(["login"]);
    }
  }

  ngOnInit(){

    this.usermanagement.loggedProfile = JSON.parse(localStorage.getItem("currentUser") ?? "[]");
  }
}
