import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validatePhoneNumber(): ValidatorFn{
  return (control: AbstractControl) : ValidationErrors | null => {

    const phone = control.value;
    const phone_regex = /^\d{3}-\d{3}-\d{4}$/g;

    if(phone_regex.test(phone) || phone === ""){
      return null;
    }

    return { invalidPhone: true} ;
  }
}


