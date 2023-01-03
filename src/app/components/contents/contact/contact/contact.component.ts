import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact_me_image = "../../../../../assets/uploads//contact-me.png";

  contactForm = this.fb.group({
    email: ['', Validators.required],
    message: ['', Validators.required]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendEmail(){
    console.log('Email Successfully sent');
  }

  resetEmail(){
    this.contactForm.reset();
  }
}
