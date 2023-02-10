/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { empleados } from 'src/dataBase/empleados.entity';
import { rol } from 'src/dataBase/rol.entity';
import { EmpleadosController } from './empleados.controller';
import { RolController } from './rol/rol.controller';
import { EmpleadosService } from './services/empleados.service';
import { RolService } from './services/rol.service';


@Module({
  imports: [TypeOrmModule.forFeature([empleados, rol])],
  controllers: [EmpleadosController, RolController],
  providers: [EmpleadosService, RolService ],
})
export class EmpleadosModule {}
