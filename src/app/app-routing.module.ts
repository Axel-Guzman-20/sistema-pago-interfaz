import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTransaccionesComponent } from './ver-transacciones/ver-transacciones.component'; // Importa el nuevo componente
import { AppComponent } from './app.component';
import { RealizarPagoComponent } from './realizar-pago/realizar-pago.component';

const routes: Routes = [
  { path: '', redirectTo: '/realizar-pago', pathMatch: 'full' },
  { path: 'realizar-pago', component: RealizarPagoComponent },
  { path: 'ver-transacciones', component: VerTransaccionesComponent } // Configura la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





