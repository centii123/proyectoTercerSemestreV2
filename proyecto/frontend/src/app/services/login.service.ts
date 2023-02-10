import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CreateEmpleadoModel, EmpleadoModel, UpdateEmpleadoModel } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly Api_url: string = 'http://localhost:3000/login';
  constructor(private httpClient: HttpClient) {}

  login(logeo: Object):Observable<EmpleadoModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<EmpleadoModel>(url, logeo);
    return response;
  }
}
