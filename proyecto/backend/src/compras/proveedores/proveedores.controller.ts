import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ProveedorService } from '../services/proveedor.service';

@Controller('proveedores')
export class ProveedoresController {
  constructor(private proService: ProveedorService) {}

  //registrar proveedores//
  @Post()
  createCat(@Body() newPro) {
    return this.proService.createProveedor(newPro);
  }

  //listar proveedores//
  @Get()
  getPro() {
    return this.proService.prover();
  }
  //buscar proveedor//
  @Get(':id')
  buscprov(@Param('id', ParseIntPipe) id: number)
  {
      return this.proService.buscpro(id);
  }

  //eliminar proveedores//
  @Delete(':id')
  deleteprover(@Param('id', ParseIntPipe) id: number) {
    return this.proService.deleteProv(id);
  }

  //actualizar proveedor//
  @Patch(':id')
  updateprover(@Param('id', ParseIntPipe) id: number, @Body() UpdateProver) {
    return this.proService.updateProv(id, UpdateProver);
  }
}
