import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistroModel } from "../models/register.entity";

@Injectable({
    providedIn: 'root'
})
export class ClienteServices{
    registrarFactura() {
      throw new Error('Method not implemented.');
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    readonly api = 'http://localhost:3000/cliente'

    constructor(private http:HttpClient){}

    registrarCliente(registro:RegistroModel){
        const url = `${this.api}`;
        return this.http.post(url,registro) 
    }

    buscarCliente(numCedula: string){
        const url = `${this.api}?cedula=${numCedula}`;
        return this.http.get(url);
    }
    
}