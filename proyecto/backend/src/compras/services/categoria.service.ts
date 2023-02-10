import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { categoria_proveedor } from 'src/dataBase/categoria_proveedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(categoria_proveedor)
    private catRepository: Repository<categoria_proveedor>,
  ) {}

  //insertar categorias//
  async createCategoria(cat) {
    const newCat = await this.catRepository.create(cat);
    return await this.catRepository.save(newCat);
  }

  //listar categorias//
  async getCate() {
    return this.catRepository.find();
  }

  //eliminar categoria//
  deleteCat(id_cat: number) {
    return this.catRepository.delete({ id_cat });
  }

  //actualizar categoria//
  async updateCte(id_cat: number, cat1) {
    return this.catRepository.update({ id_cat }, cat1);
  }
}
