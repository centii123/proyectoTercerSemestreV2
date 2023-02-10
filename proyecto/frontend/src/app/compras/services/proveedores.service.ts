import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createproveedorModel, proveedorModel } from '../models/proveedores.model';




@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  readonly Api_url: string = 'http://localhost:3000/proveedores';
  constructor(private httpClient : HttpClient) {
    
   }
   //listar proveedores//
   getAll():Observable<proveedorModel[]>{4
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<proveedorModel[]>(url)
    return response 
   }

   //registrar proveedores//
   postAll(proveedor:createproveedorModel):Observable<createproveedorModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<createproveedorModel>(url, proveedor)
    return response 
   }
}
