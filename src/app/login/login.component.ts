import { Component } from '@angular/core';
import { Login } from '../login';
import { ProfilemanagementService } from '../profilemanagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  actual: Login = new Login();

  constructor(public usermanagement: ProfilemanagementService, private router: Router){

    if(!this.usermanagement.isLogged()){

      this.router.navigate(["profile"]);
    }
  }
}
