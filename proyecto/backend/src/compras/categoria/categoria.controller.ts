import {
  Controller,
  Post,
  Body,
  Get,
  ParseIntPipe,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private catService: CategoriaService) {}

  //insertar categorias//
  @Post()
  createCat(@Body() newCat) {
    return this.catService.createCategoria(newCat);
  }

  //listar categorias//
  @Get()
  getCate() {
    return this.catService.getCate();
  }

  //eliminar categoria//
  @Delete(':id')
  deletecate(@Param('id', ParseIntPipe) id: number) {
    return this.catService.deleteCat(id);
  }

  //actualizar categoria//
  @Patch(':id')
  updatecate(@Param('id', ParseIntPipe) id: number, @Body() UpdateCate) {
    return this.catService.updateCte(id, UpdateCate);
  }
}
