import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Fullname: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(formValue) {
    console.log("Form submitted!");
    console.log("Submitted data:", formValue);
    // Uncomment this once you have the contact service in place
    // this.contact.PostMessage(formValue)
    //   .subscribe(response => {
    //     location.href = 'https://mailthis.to/confirm';
    //     console.log(response);
    //   }, error => {
    //     console.warn(error.responseText);
    //     console.log({ error });
    //   });
  }
}
