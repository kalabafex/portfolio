import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  private notifier: NotifierService;
  private phoneRegex = /^\+?([0-9]{1,3})?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  constructor(private builder: FormBuilder, private contactService: ContactService, private spinner: NgxSpinnerService,  notifier: NotifierService) {
    this.notifier = notifier;
  }
  ngOnInit() {
    this.FormData = this.builder.group({
      Title: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      GuestName: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [
        Validators.pattern(this.phoneRegex)
      ])

    });
  }

  onSubmit(formValue) {
    this.spinner.show();
    this.contactService.PostMessage(formValue).subscribe(
      (response) => {

        this.spinner.hide();
        this.notifier.notify('success', JSON.parse(response.body).message);
        console.log(JSON.parse(response.body).message);
      },
      (error) => {
        this.notifier.notify('error', error.error);
        this.spinner.hide()
      });
    this.FormData.reset();
  }
}
