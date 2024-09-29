import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl =  "https://sk4ie7c5c0.execute-api.us-east-1.amazonaws.com/dev";
  constructor(private http: HttpClient) { }
  PostMessage(value: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { value: value }; // Replace `value` with your payload structure

    return this.http.post(this.apiUrl, body, { headers: headers });
  }
}
