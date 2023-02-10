import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { InventarioComponent } from './inventario.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { ListarComponent } from './listar/listar.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
{ path: '', component: InventarioComponent },
{ path: 'product', component: ProductComponent},
{ path: 'listar', component: ListarComponent},
{path: 'categorias', component: CategoriasComponent},
{ path: 'categorias_l', component: ListarCategoriasComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
