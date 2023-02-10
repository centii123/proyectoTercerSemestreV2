import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasModel, CreateCategoriasModel, UpdateCategoriasModel } from 'src/app/models/listar-categorias.model';
import { CategoriasService } from 'src/app/services/categorias.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categoriasNuevo: CreateCategoriasModel = {
    id_cat:0,
    nombre_cat: ''
  }
  categoriasEdit: UpdateCategoriasModel = {
    id_cat: 0,
    nombre_cat: ''
  }
  update: boolean = false
  categorias: CategoriasModel[] = []
  CategoriasModel: any;


  constructor (private categoriasService: CategoriasService, private router: Router){}

  ngOnInit(): void {
    
    
    if (history.state.id_cat) {
      this.update = true
      delete history.state.navigationId
      this.categoriasEdit= history.state
    }
  }

  nuevaCategoria(categorias: CreateCategoriasModel) {
    console.log(categorias)
    console.log('registro')
    const response = this.categoriasService
      .store(categorias)
      .subscribe((response)=>{
        console.log(response)
      });
  }

  print(){
    console.log(this.categoriasEdit.nombre_cat);
    const input = document.getElementById('categoriaNombre') as HTMLInputElement
    console.log(input.value);
  }
  updateCategoria(categorias: UpdateCategoriasModel) {
    console.log(categorias)
    console.log('update')
    const response = this.categoriasService.
    update(categorias.id_cat, categorias)
      .subscribe((response)=>{
        console.log(response)
      });
  }

  deleteCat(id:number){
    console.log(id)
    const response = this.categoriasService.delete(id).subscribe((response) => {
      this.categorias =this.categorias.filter(categorias => categorias.id_cat != id)
    });
  }
}

