import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { VerTransaccionesComponent } from './ver-transacciones/ver-transacciones.component';
import { AppRoutingModule } from './app-routing.module'; // Importar el módulo de rutas
import { MatTableModule } from '@angular/material/table';
import { RealizarPagoComponent } from './realizar-pago/realizar-pago.component';
import { BuscarTransaccionComponent } from './buscar-transaccion/buscar-transaccion.component'; // Importar MatTableModule


@NgModule({
  declarations: [
    AppComponent,
    VerTransaccionesComponent,
    RealizarPagoComponent,
    BuscarTransaccionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}