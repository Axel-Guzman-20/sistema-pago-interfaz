import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
      cardholderName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(4)]],
      expirationYear: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]],
      expirationMonth: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])$')]]
    });
  }


  enviarValores() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulario no válido');
    }
  }

}
