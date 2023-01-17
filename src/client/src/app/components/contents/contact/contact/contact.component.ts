import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact_me_image = "../../../../../assets/uploads//contact-me.png";

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      email: [
        '',
       Validators.compose([ Validators.required, Validators.email ])
      ],
      message: [
        '',
       Validators.compose([ Validators.required, Validators.minLength(3)])
      ]
    })
   }

  ngOnInit(): void {
  }

  sendEmail(){
   if(this.contactForm.valid){
    console.log('Email Successfully sent');
    console.log('Email: ', this.contactForm.value.email)
    console.log('message: ', this.contactForm.value.message)
    this.contactForm.reset();
   }
  }

  resetEmail(){
    this.contactForm.reset();
  }
}
