import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

interface ApiResponse {
  statusCode: number;
  message: string;
  transactionId: string;
  approved: boolean;
  errors: Record<string, string>;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  form: FormGroup;
  showBack = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private dialog: MatDialog) {
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
      this.http.post<ApiResponse>('http://localhost:8080/api/transaccion', this.form.value)  //URL del endpoint
        .subscribe(res => {
          console.log(res);
          if (res && res.message) {
            this.dialog.open(DialogComponent, {
              data: { message: res.message }
            });
          }
        }, err => {
          console.error(err);
          if (err && err.error && err.error.message) {
            this.dialog.open(DialogComponent, {
              data: { message: 'Error en la transacción: ' + err.error.message }
            });
          }
        });
    } else {
      console.log('Formulario no válido');
    }
  }

  getErrorMessage(field: string): string {
    const control = this.form.get(field);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    } else if (control?.hasError('pattern')) {
      return 'Formato inválido';
    } else if (control?.hasError('email')) {
      return 'Correo electrónico inválido';
    } else if (control?.hasError('minlength')) {
      return `Debe tener al menos ${control.errors?.['minlength'].requiredLength} caracteres`;
    } else if (control?.hasError('maxlength')) {
      return `Debe tener como máximo ${control.errors?.['maxlength'].requiredLength} caracteres`;
    }
    return '';
  }
  showCardBack() {
    this.showBack = true;
  }

  showCardFront() {
    this.showBack = false;
  }





}
