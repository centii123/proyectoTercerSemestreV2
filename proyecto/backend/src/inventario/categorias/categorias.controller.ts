/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  ParseIntPipe,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { CategoriasService } from '../services/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  //insertar categorias//
  @Post()
  createCategorias(@Body() newCategorias) {
    return this.categoriasService.createCategorias(newCategorias);
  }

  //listar categorias//
  @Get()
  getCategorias() {
    return this.categoriasService.getCategorias();
  }

  //eliminar categoria//
  @Delete(':id')
  deletecategorias(@Param('id', ParseIntPipe) id: number) {
    return this.categoriasService.deleteCategorias(id);
  }

  //actualizar categoria//
  @Put(':id')
  updatecategorias(@Param('id', ParseIntPipe) id: number, @Body() UpdateCategorias) {
    return this.categoriasService.updateCategorias(id, UpdateCategorias);
  }
}
