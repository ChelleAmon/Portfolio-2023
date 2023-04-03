import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from 'src/app/services/contactus.service';
import { validatePhoneNumber } from 'src/shared/phone.validator';


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

  hiddenTemplateStyle = {
    'opacity': '0',
    'transition' : 'all 2s ease-out'
  }

  constructor(private fb: FormBuilder, private contactusService: ContactusService) {

    this.contactForm = this.fb.group({
      name: [
        '', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'blur'
        }
      ],
      email: [
        '', {
        validators: Validators.compose([ Validators.required, Validators.email ]),
        updateOn: 'blur'
        }
      ],
      phone: [
        '',
        {
        validators: [validatePhoneNumber()],
        updateOn: 'blur'
        }
      ],
      message: [
        '', {
        validators: Validators.compose([ Validators.required, Validators.minLength(3)]),
        updateOn: 'blur'
        }
      ]
    })
   }

  ngOnInit(): void {
  }

  displayTemplateStyle(bgColor: string, borderColor: string, fontColor: string) {
    return {
    'background': bgColor,
    'border': `2px solid ${borderColor}`,
    'color': fontColor,
    'opacity': '1',
    'transition': 'opacity 1s ease-out'
    }
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
          this.isSent = false
          this.hasError = true
        },
        complete: () => {
          this.contactForm.reset();
        }
      })
    }else {
      this.isSent = false
      this.hasError = true
    }
  }

  resetEmail(){
    this.contactForm.reset();
  }

 displaySuccessTemplate() {
    setTimeout(()=>{
      this.isSent = false;
    }, 5000);

    return this.displayTemplateStyle('#FFFFFF', '#27672D', '#27672D')
  }

  displayErrorTemplate(){
    setTimeout(()=>{
      this.hasError = false;
    }, 3000);

    const errorTemplate = this.displayTemplateStyle('#FFFFFF', '#AC1818', '#AC1818')
    return errorTemplate;
  }

  hideTemplate(){
    return this.hiddenTemplateStyle;
  }
}

