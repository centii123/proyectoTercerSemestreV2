import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateEmpleadoModel, EmpleadoModel, UpdateEmpleadoModel } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  readonly Api_url: string = 'http://localhost:3000/empleados';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<EmpleadoModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<EmpleadoModel[]>(url);
    return response;
  }
  store(empleado: CreateEmpleadoModel):Observable<CreateEmpleadoModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<CreateEmpleadoModel>(url, empleado);
    return response;
  }
  update(id: UpdateEmpleadoModel['cedula_empleados'], empleado: UpdateEmpleadoModel):Observable<UpdateEmpleadoModel> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.put<UpdateEmpleadoModel>(url, empleado);
    return response;
  }
  getOne(id: EmpleadoModel['cedula_empleados']): Observable<EmpleadoModel[]> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.get<EmpleadoModel[]>(url);
    return response;
  }
  destroy(id: EmpleadoModel['cedula_empleados']): Observable<boolean> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.delete<any>(url).pipe(map((response:{rta: boolean})=>{
      return response.rta
    }));
    return response;
  }
}
