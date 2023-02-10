import { ProductSerchDTO, ProductUpdate_DTO } from './../DTO/ProductDTO.dto';
import { producto } from './../../dataBase/producto.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(producto) readonly productoss: Repository<producto>,
  ) {}

  async getproduct(id_prod) {
    return await this.productoss.findOne({
      where: { id_prod },
    });
  }

  async updateStockProuct(id_prod: number, stock: ProductUpdate_DTO) {
    return this.productoss.update(id_prod, stock);
  }

  async serchProduct({ producto }: ProductSerchDTO) {
    const productOOS = await this.productoss.query(
      `SELECT * FROM producto where nombre_p like '%${producto}%' ORDER BY id_prod LIMIT 5 OFFSET 0`,
    );
    if (productOOS.length == 0) {
      return new HttpException('no encontrado', HttpStatus.FOUND);
    }
    return productOOS;
  }
}
