import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  clicked: Boolean;
  hamburger_menu_open = '../../../assets/uploads/Hamburger Menu.png';
  hamburger_menu_close="../../../assets/uploads/close-navbar.png";

  navigationItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  constructor(private navigationService: NavigationService) {
    this.clicked = this.navigationService.isOpen
   }

  ngOnInit(): void {
  }

  openHamburgerMenu(opened: Boolean){
   const burgerMenuIsOpen = this.navigationService.openHamburgerMenu(opened)
   this.clicked = this.navigationService.isOpen
   return burgerMenuIsOpen;
  }
}
