import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  clicked: Boolean;

  navigationItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  constructor(private navigationService: NavigationService) {
    this.clicked = this.navigationService.isOpen
   }

  ngOnInit(): void {
  }

  testMe(){
    return this.navigationService.testfunction()
  }

  openHamburgerMenu(opened: Boolean){
    this.clicked = opened;
    console.log('Nav Component, clicked AFTER status: ', this.clicked)
    return this.navigationService.openHamburgerMenu(opened)
  }
}
