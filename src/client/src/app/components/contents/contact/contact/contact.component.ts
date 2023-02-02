import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from 'src/app/services/contactus.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact_me_image = "../../../../../assets/uploads//contact-me.png";
  isSent: Boolean = false
  hasError: Boolean = false

  constructor(private fb: FormBuilder, private contactusService: ContactusService) {

    this.contactForm = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required])
      ],
      email: [
        '',
       Validators.compose([ Validators.required, Validators.email ])
      ],
      phone: [
        '',
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
    if (this.contactForm.valid){
      let contactUs = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message
      }

      this.contactusService.sendEmail(contactUs).subscribe({
        next: () => {
          this.hasError = this.isSent
          this.isSent = true
        },
        error: (err) => {
          console.log("Errorzzzzz: ", err )
          this.isSent = false
          this.hasError = true
        },
        complete: () => {
          this.contactForm.reset();
        }
      })
    }else {
      console.log('One of the fields is invalid!')
      this.isSent = false
      this.hasError = true
    }
  }

  resetEmail(){
    this.contactForm.reset();
  }

  displaySuccessTemplate() {
    return {
      'background': '#FFFFFF',
      'border': '2px solid #27672D',
      'font-family': 'Playfair Display',
      'line-height': '1.5%',
      'font-size': '1.25rem',
      'color': '#27672D',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'margin': 'auto',
      'max-width' : '70%',
      "padding": '1.5rem 2rem',
    }
  }

  displayErrorTemplate(){
    return {
      'background': '#FFFFFF',
      'border': '2px solid #AC1818',
      'font-family': 'Playfair Display',
      'line-height': '1.5%',
      'font-size': '1.25rem',
      'color': '#AC1818',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'margin': 'auto',
      'max-width' : '70%',
      "padding": '1.5rem 2rem',
    }
  }


  hideTemplate(){
    return {
      'display': 'none'
    }
  }
}

