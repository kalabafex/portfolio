import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) { }
  ngOnInit() {
    this.FormData = this.builder.group({
      Title: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      GuestName: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [
        Validators.pattern('^[0-9]{10}$')
      ])

    });
  }

  onSubmit(formValue) {

    console.log("Form submitted!");
    console.log("Submitted data:", formValue);
    this.contact.PostMessage(formValue);
    // this.contact.PostMessage(formValue)
    //   .subscribe(response => {
    //     location.href = 'https://mailthis.to/confirm';
    //     console.log(response);
    //   }, error => {
    //     console.warn(error.responseText);
    //     console.log({ error });
    //   });
    this.FormData.reset();
  }
}
