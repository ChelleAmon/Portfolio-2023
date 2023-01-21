import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact_me_image = "../../../../../assets/uploads//contact-me.png";

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
        },
        error: (err) => console.log("Errorzzzzz: ", err ),
        complete: () => this.contactForm.reset()
      })
    }else {
      console.log('One of the fields is invalid!')
    }
  }

  resetEmail(){
    this.contactForm.reset();
  }
}
