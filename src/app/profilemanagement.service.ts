import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Router } from '@angular/router';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class ProfilemanagementService {

  currentProfileList: Array<Profile> = new Array<Profile>;
  loggedProfile: Profile = new Profile();
  alreadyExists: boolean = false;
  emptyFields: boolean = false;
  incorrectCredentials: boolean = false

  constructor(public router: Router) { }

  isLogged(){

    return localStorage.getItem('currentUser') == null ? true : false;
  }

  currentProfileListRefresh(){

    this.currentProfileList = JSON.parse(localStorage.getItem("profileList") ?? '[]');

  }

  register(profile: Profile){

    if(this.checkIfEmpty(profile)){
      this.emptyFields = true;
      this.lockScreen();
    
    } else if(localStorage.getItem("profileList") == null){
      this.currentProfileList.push(profile);
      this.savingToLocal();

    } else{
        this.currentProfileListRefresh();

      if(this.duplicateChecker(profile).length == 0){
        this.currentProfileList.push(profile);
        this.savingToLocal();

      }else{
        this.alreadyExists = true;
        this.lockScreen();
      }
    }
  }

  checkIfEmpty(p: Profile){

    let count = 0;
    Object.values(p).forEach(x => {x === '' || x === 0 ? count += 1 : count});
    return count > 0 ? true: false;
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
    return result;
  }

  reset(){

    this.emptyFields = false;
    this.alreadyExists = false;
    window.onscroll = function(){};
  }

  lockScreen(){

    window.scrollTo(0, 0);
    let scrollTop = document.documentElement.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft;
    window.onscroll = function(){
      window.scrollTo(scrollTop, scrollLeft);
    }
  }


  login(l: Login){

    this.currentProfileListRefresh();
    this.currentProfileList.map(x => {
      if(l.email === x.email && l.password === x.password){

        this.loggedProfile = x;
        localStorage.setItem("currentUser", JSON.stringify(x));
        this.router.navigate(["collection"]);
      } else{

        this.incorrectCredentials = true;
      }
    });
  }

  logout(){

    localStorage.removeItem("currentUser");
    window.location.reload();
  }

  updateProfile(){

    localStorage.removeItem("currentUser");
    localStorage.setItem("currentUser", JSON.stringify(this.loggedProfile));
    this.currentProfileListRefresh();
    let correctProfile: Profile = new Profile();
    this.currentProfileList.map(x => {
      if(x.email === this.loggedProfile.email){
        correctProfile = x;
      }
    });
    let index: number = this.currentProfileList.indexOf(correctProfile);
    this.currentProfileList.splice(index, 1, this.loggedProfile);
    localStorage.setItem("profileList", JSON.stringify(this.currentProfileList));
    window.scrollTo(0,0);
    window.location.reload();
  }
}
