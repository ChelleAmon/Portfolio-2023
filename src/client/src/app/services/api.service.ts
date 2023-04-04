import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = !environment.production ? 'http://localhost:5001/portfolio-2023-6bd0c/us-central1/' : 'gichelleamon.dev' || 'https://portfolio-2023-6bd0c.web.app/';

  constructor(private http: HttpClient) { }

  post<T>(resourceName: string, emailData: any){
    return this.http.post<T>(this.baseUrl + resourceName, emailData,
      //  {
      // withCredentials: true
    // }
    )
  }
}
