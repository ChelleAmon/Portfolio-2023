import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('openClose', [

      state('open', style({
        display: 'block',
      })),

      state('close', style({
        display: 'none'
      })),

      transition('open => close', [
        animate("1s ease-in")
      ]),
      transition('close => open', [
        animate("1s ease-out")
      ]),
    ]),
  ]
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

  hamburgerMenuChangeState(opened: Boolean){
   const burgerMenuIsOpen = this.navigationService.hamburgerMenuChangeState(opened)
   this.clicked = this.navigationService.isOpen
   return burgerMenuIsOpen;
  }

  openNavLinkPage(){
    const link = this.navigationService.openNavLinkPage();
    this.clicked = this.navigationService.isOpen;
    return link;
  }
}
