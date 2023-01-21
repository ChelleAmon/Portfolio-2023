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
  //  if(this.contactForm.valid){
  //   console.log('Email Successfully sent');
  //   console.log('Email: ', this.contactForm.value.email)
  //   console.log('message: ', this.contactForm.value.message)
  //   this.contactForm.reset();
  //  }
    if (this.contactForm.valid){
      let contactUs = {
        from: this.contactForm.value.from,
        html: this.contactForm.value.html
      }

      this.contactusService.sendEmail(contactUs).subscribe({
        next: (data: any) => console.log(data),
        error: (err) => console.log("Errorzzzzz: ", err ),
        complete: () => this.contactForm.reset()
      })

      this.contactForm.reset();
    }else {
      console.log('One of the fields is invalid!')
    }
  }

  resetEmail(){
    this.contactForm.reset();
  }
}

// this.emailService.sendEmail(user).subscribe(
//   data => {
//     let res:any = data;
//   },
//   err => {
//     this.loading = false;
//     this.buttonText = "Submit";
//   },() => {
//     this.loading = false;
//     this.buttonText = "Submit";
//     this.nameFormControl.reset();
//     this.emailFormControl.reset();
//     this.subjectFormControl.reset();
//     this.textareaFormControl.reset();
//   }
// );
// }
