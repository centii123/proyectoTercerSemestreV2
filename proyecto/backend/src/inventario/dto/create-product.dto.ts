/* eslint-disable prettier/prettier */
export class CreateProductDto {
  id_prod: number;
  nombre_p: string;
  descripcion_p: string;
  stock: number;
  stock_min: number;
  precio_compra: number;
  precio_venta: number;
  id_cat: number;
}
