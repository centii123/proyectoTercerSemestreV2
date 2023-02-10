import { Component, OnInit } from '@angular/core';
import { listarModel } from 'src/app/models/listar.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  ngOnInit(): void {
    this.getAll()
  }

  Listar: listarModel []=[]
  constructor (private productService: ProductService){}
  async getAll(){
    const response = this.productService.getAll().subscribe((response) => {
      this.Listar = response;
    });
  }
   deleteProd(id:number){
    console.log(id)
    const response = this.productService.delete(id).subscribe((response) => {
      this.Listar =this.Listar.filter(product => product.id_prod != id)
    });
  }
}
