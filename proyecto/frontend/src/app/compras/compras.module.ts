import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras.component';
import { CategoriaProveedorComponent } from './categoria-proveedor/categoria-proveedor.component';
import { NavComponent } from './nav/nav.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FooterComponent } from './footer/footer.component';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ComprasComponent,
    CategoriaProveedorComponent,
    NavComponent,
    RegistroProveedorComponent,
    ProveedoresComponent,
    FooterComponent,
    ListarCategoriaComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    FormsModule,
    RouterModule
  ],

})
export class ComprasModule { }
