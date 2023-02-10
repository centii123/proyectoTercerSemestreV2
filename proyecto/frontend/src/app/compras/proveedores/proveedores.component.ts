import { Component, OnInit } from '@angular/core';
import { proveedorModel } from '../models/proveedores.model';
import { ProveedoresService } from '../services/proveedores.service';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  ngOnInit(): void {
    this.listarP()
  }
  constructor (private proveedorService: ProveedoresService ){

  }
  //listar proveedores

  listarP(){
    const response = this.proveedorService.getAll().subscribe(response=>{  
      this.proveedores=response
      console.log(this.proveedores)})
  }
  proveedores : proveedorModel[]=[]
}



