import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  PostMessage(formValue: any) {
    console.log("wala");
  }

  constructor() { }
}
