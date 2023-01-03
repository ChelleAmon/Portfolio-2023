import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact_me_image = "../../../../../assets/uploads//contact-me.png";


  constructor() { }

  ngOnInit(): void {
  }

}
