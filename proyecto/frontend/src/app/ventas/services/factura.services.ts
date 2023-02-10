import { FacturaGeneDetalle, FacturaGeneDocumento } from './../models/facturaGene.entity';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class FacturaServices{
    ngOnInit(): void {
       
    }
    readonly api = 'http://localhost:3000/factura'

    constructor(private http:HttpClient){}
    obtenerultimodoc(){
        let url=`${this.api}/ultimo`
        return this.http.get(url)
    }

    registrarFacturaDocumento(registro:FacturaGeneDocumento){
        let url=`${this.api}/documento`
        return this.http.post(url,registro)
    }

    registrarfacturaDetalle(registro:FacturaGeneDetalle){
        const url = `${this.api}/detalle`;
        return this.http.post(url,registro)
    }
    
     
}