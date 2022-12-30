import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  testMe(){
    return this.navigationService.testfunction()
  }
}
