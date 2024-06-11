import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-transaccion',
  templateUrl: './buscar-transaccion.component.html',
  styleUrls: ['./buscar-transaccion.component.css']
})
export class BuscarTransaccionComponent {
  form: FormGroup;
  transaction: any = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      transactionId: ['', [Validators.required]]
    });
  }

  buscarTransaccion() {
    if (this.form.valid) {
      const transactionId = this.form.get('transactionId')?.value;
      this.http.get<any>(`http://localhost:8080/api/transaccion/${transactionId}`).subscribe(
        res => {
          this.transaction = res;
          this.errorMessage = null;
        },
        err => {
          this.transaction = null;
          this.errorMessage = 'Error al buscar la transacción, el id no existe';
          console.error(err);
        }
      );
    } else {
      this.errorMessage = 'Formulario no válido';
    }
  }
}