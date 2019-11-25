import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'zip-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  constructor(
    private formBuilder: FormBuilder) {
  }

  formSubmitted = false;
  loader = false;
  eligibilityForm = this.formBuilder.group({
    businessName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobileNumber: ['', Validators.required]
  });

  onSubmit() {
    if (this.eligibilityForm.valid) {
      console.log('Form Payload:' + JSON.stringify(this.eligibilityForm.value));
      this.loader = true;

      setTimeout(() => {
        this.loader = false;
        this.eligibilityForm.reset();
        this.formSubmitted = true;
      }, 3000);

      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000);

    } else {
      console.log('Please fill in form');
    }

  }
}
