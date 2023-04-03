import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = !environment.production ? 'http://localhost:3000/api/' : '/api/';

  constructor(private http: HttpClient) { }

  post<T>(resourceName: string, emailData: any){
    return this.http.post<T>(this.baseUrl + resourceName, emailData, {
      withCredentials: true
    })
  }
}
