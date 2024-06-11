import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ver-transacciones',
  templateUrl: './ver-transacciones.component.html',
  styleUrls: ['./ver-transacciones.component.css']
})
export class VerTransaccionesComponent implements OnInit {

  displayedColumns: string[] = ['transactionId', 'amount', 'brand', 'bank', 'cardNumber', 'approved'];
  vertransacciones: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/transaccion') //URL del endpoint
      .subscribe(data => {
        this.vertransacciones = data;
      });
  }
}
