import { Component,OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from '../models/categoria.model';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit{
  ngOnInit(): void {
    this.getCat()
  }
  categorias: CategoriaModel[] = []
 constructor(private categoriaService: CategoriaService){

 }
 async getCat(){
  const response = this.categoriaService.getAll().subscribe((response) => {
    this.categorias = response;
  });

}

}
