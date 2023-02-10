import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createproveedorModel, proveedorModel } from '../models/proveedores.model';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css']
})
export class RegistroProveedorComponent {
  ngOnInit(): void {
    

}
constructor (private proveedorService: ProveedoresService, private router: Router){


}
registroP(registro:createproveedorModel){
  const response = this.proveedorService.postAll(registro).subscribe(response=>{  
   
    console.log(response)
    this.router.navigate(['/compras/proveedores/']);
  })
    
}
registro : createproveedorModel={
    id_prov:0,
    nombre_prov:'',
    celular:0,
    direccion:'',
    id_cat:0
}
}