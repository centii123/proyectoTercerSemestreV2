import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { categorias } from 'src/dataBase/categorias.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(categorias)
    private categoriasRepository: Repository<categorias>,
  ) {}

  //insertar categorias//
  async createCategorias(categorias) {
    const newCategorias = await this.categoriasRepository.create(categorias);
    return await this.categoriasRepository.save(newCategorias);
  }

  //listar categorias//
  async getCategorias() {
    return this.categoriasRepository.find();
  }

  //eliminar categoria//
  deleteCategorias(id_cat: number) {
    return this.categoriasRepository.delete({ id_cat });
  }

  //actualizar categoria//
  async updateCategorias(id_cat: number, cat1) {
    return this.categoriasRepository.update({ id_cat }, cat1);
  }
}
