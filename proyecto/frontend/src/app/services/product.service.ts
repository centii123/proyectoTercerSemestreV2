import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosModel } from 'src/app/ventas/models/productos.entity';
import { CreatelistarModel, listarModel, UpdatelistarModel } from '../models/listar.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly Api_url: string='http://localhost:3000/inventario'
  constructor( private httpClient: HttpClient) {}

  producto(nuevo: CreatelistarModel): Observable<CreatelistarModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<CreatelistarModel> (url,nuevo);
    return response;

  }
  productoUpdate(nuevo: UpdatelistarModel,id:number): Observable<UpdatelistarModel>{
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.put<UpdatelistarModel> (url,nuevo);
    return response;

  }
  getAll(): Observable <listarModel[]> {
      const url = `${this.Api_url}`;
      const Response = this.httpClient.get<listarModel[]>(url);
      return Response;
  }
  delete(id:number): Observable <any> {
    const url = `${this.Api_url}/${id}`;
    const Response = this.httpClient.delete<any>(url);
    return Response;
}
}
