export interface ProductosModel{
    id_prod?:number
    nombre_p?:string
    stock?:number
    stock_min?:number
    precio_compra?:any
    precio_venta?:any
    id_cat?:number
    cantidades?:number | null
    total?:number
}