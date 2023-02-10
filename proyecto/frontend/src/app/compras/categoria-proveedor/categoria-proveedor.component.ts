import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from '../models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-proveedor',
  templateUrl: './categoria-proveedor.component.html',
  styleUrls: ['./categoria-proveedor.component.css']
})
export class CategoriaProveedorComponent {

  ngOnInit(): void {


  }
  constructor(private categoriaService: CategoriaService, private router: Router) {


  }
  registroC(registro: CategoriaModel) {
    const response = this.categoriaService.postAll(registro).subscribe(response => {

      console.log(response)
      this.router.navigate(['/compras/listar-c/']);
    })

  }
  registro: CategoriaModel = {
    id_cat: 0,
    especializacion: '',
  }

}
