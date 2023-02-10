export interface FacturaGeneDetalle{
    //forEach(arg0: (element: any) => void): unknown;
    descripccion:string;
    cantidad:number;
    tipo_producto:string;
    id_prod:number;
    id_documento_venta:number;
}

export interface FacturaGeneDocumento{
    total: number;
    cedula_cliente: string
}