import { Component } from '@angular/core';
import { ProfilemanagementService } from '../profilemanagement.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public usermanagement: ProfilemanagementService){}
}
