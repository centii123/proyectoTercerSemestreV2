export interface proveedorModel{
    id_prov:number,
    nombre_prov: string,
    celular: number,
    direccion: string,
    especializacion: string 
}
export interface createproveedorModel extends Omit<proveedorModel,'especializacion'>{
    id_cat:number,

}