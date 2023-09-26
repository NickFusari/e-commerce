import { Component } from '@angular/core';
import { ProfilemanagementService } from '../profilemanagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(service: ProfilemanagementService, private router: Router){

    if(service.isLogged()){

      this.router.navigate(["login"]);
    }
  }
}
