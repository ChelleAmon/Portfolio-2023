import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private api: ApiService) { }

  sendEmail(emailData: any){
    return this.api.post('sendEmailOverHTTP', emailData)
  }
}
