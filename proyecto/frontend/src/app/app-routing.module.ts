import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadosModule } from './empleados/empleados.module';
import { LoginComponent } from './empleados/login/login.component';

const routes: Routes = [
  { path: 'empleados',loadChildren: ()=> import('./empleados/empleados.module').then(m => m.EmpleadosModule)},
  {path: '', component: LoginComponent},
  { path: 'compras', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule) },
  { path: 'inventario', loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule) },
  { path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) },
  { path: '**', component: AppComponent},
];


 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
