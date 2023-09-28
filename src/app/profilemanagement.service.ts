import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfilemanagementService {

  currentProfileList: Array<Profile> = new Array<Profile>;
  alreadyExists: boolean = false;

  constructor(public router: Router) { }

  isLogged(){

    return localStorage.getItem('currentUser') == null ? true : false;
  }

  register(profile: Profile){

    if(localStorage.getItem("profileList") == null){
      this.currentProfileList.push(profile);
      this.savingToLocal();

    } else{
      this.currentProfileList = JSON.parse(localStorage.getItem("profileList") ?? '[]');

      if(this.duplicateChecker(profile).length == 0){
        this.currentProfileList.push(profile);
        this.savingToLocal();

      }else{

        this.alreadyExists = true;
      }
    }
  }

  savingToLocal(){

    localStorage.setItem("profileList", JSON.stringify(this.currentProfileList));
    this.router.navigate(["login"]);
  }

  duplicateChecker(profileToTest: Profile){

    let result: Array<Profile> = [];

    this.currentProfileList.map(x => {
      if(x.email === profileToTest.email){
        result.push(x);
      }
    });

    console.log(result);
    return result;
  }

  anotherEmail(){

    this.alreadyExists = false;
  }


  login(){}
}
