import { Component,inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoriasModel } from 'src/app/models/listar-categorias.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CreatelistarModel, UpdatelistarModel } from 'src/app/models/listar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  update: boolean = false;
  private router= inject(Router);
  ngOnInit(): void{
  this.listCategorias()
  if (history.state.id_cat) {
    this.update = true
    delete history.state.nombre_cat
    delete history.state.navigationId
    console.log(history.state)
    this.updateProd= history.state
  }
 }

 categories: CategoriasModel[] = []
  constructor (private productService: ProductService, private categoriaService: CategoriasService){}

productoNuevo: CreatelistarModel={
 descripcion_p: '',
 nombre_p: '',
 stock: 0,
 stock_min: 0,
 precio_compra: 0,
 precio_venta: 0,
 id_cat: 0
}
updateProd: UpdatelistarModel={
  id_prod: 0,
  descripcion_p: '',
  nombre_p: '',
  stock: 0,
  stock_min: 0,
  precio_compra: 0,
  precio_venta: 0,
  id_cat: 0
 }
producto(){
  try{
    this.nuevoproducto()
    this.router.navigate(["inventario/listar"])
  } catch(error){
    console.log(error)
  }
}
  nuevoproducto() {
    const response = this.productService
      .producto(this.productoNuevo)
      .subscribe((response)=>{
        console.log(response)
      })
  }
  updateProducto() {
    const response = this.productService
      .productoUpdate(this.updateProd,this.updateProd.id_prod)
      .subscribe((response)=>{
        console.log(response)
        this.router.navigate(["inventario/listar"])
      })
  }
  listCategorias(){
    const response = this.categoriaService.getAll().subscribe(response => {
      this.categories = response
    })
  }
}
