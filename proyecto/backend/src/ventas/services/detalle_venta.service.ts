import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detalle_venta } from 'src/dataBase/detalle_venta.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(detalle_venta) private detalle: Repository<detalle_venta>,
  ) {}

  async registrardetalle(datos): Promise<detalle_venta> {

    let objeto = {
      descripccion: datos.descripccion,
      cantidad: datos.cantidad,
      tipo_producto: datos.tipo_producto,
      id_prod: datos.id_prod,
      id_documento_venta: datos.id_documento_venta,
    };
    let crear = await this.detalle.create(objeto);
    return await this.detalle.save<detalle_venta>(crear);
  }
}
