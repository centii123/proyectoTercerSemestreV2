import { VentasVentaComponent } from './ventas-venta/ventas-venta.component';
import { VentasRegistroComponent } from './ventas-registro/ventas-registro.component';
import { VentasInicioComponent } from './ventas-inicio/ventas-inicio.component';
import { VentasDocumentoComponent } from './ventas-documento/ventas-documento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { VentasClienteComponent } from './ventas-cliente/ventas-cliente.component';

const routes: Routes = [
  { path: '', component: VentasComponent },
  { path: 'documento', component: VentasDocumentoComponent },
  { path: 'inicio', component: VentasInicioComponent },
  { path: 'registro', component: VentasRegistroComponent },
  { path: 'venta', component: VentasVentaComponent },
  { path: 'cliente', component: VentasClienteComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
