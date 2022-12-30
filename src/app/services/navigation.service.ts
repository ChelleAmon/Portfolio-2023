import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  isOpen: Boolean = false;

  constructor() { }

  testfunction(){
    console.log('Navigation for testing only!!!!!!!!!!!!')
  }

  openHamburgerMenu(flag: Boolean){
    console.log('Nav Service, isOpen BEFORE Status: ', this.isOpen)
    this.isOpen = flag;
    console.log('Nav Service, isOpen AFTER clicked: ', this.isOpen)
  }
}
