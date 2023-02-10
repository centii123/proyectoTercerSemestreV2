import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioService } from './services/inventario.service';
import { InventarioController } from './inventario.controller';
import { producto } from 'src/dataBase/producto.entity';
import { CategoriasService } from './services/categorias.service';
import { categorias } from 'src/dataBase/categorias.entity';
import { CategoriasController } from './categorias/categorias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([producto, categorias])],
  providers: [InventarioService, CategoriasService],
  controllers: [InventarioController, CategoriasController],
})
export class InventarioModule {}
