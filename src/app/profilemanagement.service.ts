import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfilemanagementService {

  currentProfileList: Array<Profile> = new Array<Profile>;

  constructor(public router: Router) { }

  isLogged(){

    return localStorage.getItem('currentUser') == null ? true : false;
  }

  register(profile: Profile){

    if(localStorage.getItem("profileList") == null){

      this.currentProfileList.push(profile);
      localStorage.setItem("profileList", JSON.stringify(this.currentProfileList));
    } else{

      this.currentProfileList = JSON.parse(localStorage.getItem("profileList") ?? '[]');

      this.currentProfileList.push(profile);
      localStorage.setItem("profileList", JSON.stringify(this.currentProfileList));
    }

    this.router.navigate(["collection"]);
  }

  login(){}

  duplicateChecker(profile: Profile){

    this.currentProfileList.map(x => {

      if(x.email === profile.email){

        alert("You have already been registered!");
        return true;
        
      } else {

        return false;
      }
    })
  }
}
