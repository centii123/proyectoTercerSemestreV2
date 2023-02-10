import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria_proveedor } from 'src/dataBase/categoria_proveedor.entity';

import { CategoriaController } from './categoria/categoria.controller';

import { CategoriaService } from './services/categoria.service';
import { ProveedoresController } from './proveedores/proveedores.controller';
import { ProveedorService } from './services/proveedor.service';
import { proveedor } from 'src/dataBase/proveedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([categoria_proveedor, proveedor])],
  controllers: [CategoriaController, ProveedoresController],
  providers: [CategoriaService, ProveedorService],
})
export class ComprasModule {}
