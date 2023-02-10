import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  // animations: [
  //   trigger('openClose', [

  //     state('open', style({
  //       display: 'block',
  //     })),

  //     state('close', style({
  //       display: 'none'
  //     })),

  //     transition('open => close', [
  //       animate("1s ease-in")
  //     ]),
  //     transition('close => open', [
  //       animate("1s ease-out")
  //     ]),
  //   ]),
  // ]
})

export class NavigationComponent implements OnInit {
  hamburger_menu_open = '../../../assets/uploads/Hamburger Menu.png';
  hamburger_menu_close="../../../assets/uploads/close-navbar.png";

  navigationItems = ['Home', 'About', 'Skills', 'Contributions', 'Contact']

  @ViewChild("toggleMenu") toggleMenu!: ElementRef;

  constructor(private navigationService: NavigationService) {

  }

  ngOnInit(): void {
  }

  getNavLinkClickState(event: any = this.navigationService.isOpen){
    this.toggleMenu.nativeElement.checked = event;
  }
}
