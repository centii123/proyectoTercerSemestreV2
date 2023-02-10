import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RolModel } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})

export class RolesService {
  readonly Api_url: string = 'http://localhost:3000/rol';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<RolModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<RolModel[]>(url);
    return response;
  }
  getOne(id: RolModel['id_rol']): Observable<RolModel[]> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.get<RolModel[]>(url);
    return response;
  }
}
