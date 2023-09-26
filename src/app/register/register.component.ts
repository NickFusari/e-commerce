import { Component } from '@angular/core';
import { ProfilemanagementService } from '../profilemanagement.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLinear = true;
  profile: Profile = new Profile();

  constructor( public service: ProfilemanagementService) {}
}
