import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  isOpen: Boolean = false;

  constructor() { }
}

