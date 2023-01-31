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
      from: [
        '',
       Validators.compose([ Validators.required, Validators.email ])
      ],
      html: [
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
        from: this.contactForm.value.from,
        html: this.contactForm.value.html
      }

      this.contactusService.sendEmail(contactUs).subscribe({
        next: () => {
          console.log("Res: ", contactUs.from)
          console.log("Res: ", contactUs.html)
          this.isSent = true
          this.hasError = false
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
}
