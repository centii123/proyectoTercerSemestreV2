export interface CategoriasModel {
  id_cat: number;
  nombre_cat: string;
}

export interface CreateCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {

 id_cat:number

}
export interface UpdateCategoriasModel{
  id_cat: number;
  nombre_cat:string;
}
export interface DeleteCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {
  id_cat: number;
}
