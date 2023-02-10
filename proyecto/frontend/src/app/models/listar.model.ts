export interface listarModel {
  id_prod: number;
  nombre_p: string;
  descripcion_p: string;
  stock: number;
  stock_min: number;
  precio_compra: number;
  precio_venta: number;
  id_cat: number;
  nombre_cat: string;
}

export interface CreatelistarModel extends Omit<listarModel, 'id_prod'| 'nombre_cat'> {
  id_cat: number;
}

export interface UpdatelistarModel extends Omit<listarModel, 'nombre_cat'> {
  id_cat: number;
}
