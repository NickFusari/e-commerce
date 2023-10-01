import { Component } from '@angular/core';
import { ProfilemanagementService } from '../profilemanagement.service';
import { Profile } from '../profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLinear = true;
  profile: Profile = new Profile();

  constructor( public usermanagement: ProfilemanagementService, private router: Router) {

    if(!this.usermanagement.isLogged()){

      this.router.navigate(["profile"]);
    }
  }
}
