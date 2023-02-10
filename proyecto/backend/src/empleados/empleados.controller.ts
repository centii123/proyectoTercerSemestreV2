import { Body, Controller, Post } from '@nestjs/common';
import { EmpleadosService } from './services/empleados.service';

@Controller('empleados')
export class EmpleadosController {
  constructor(private empleadosService: EmpleadosService) {}

  @Post()
  registrar(@Body() newEmpleados) {
    return this.empleadosService.createEmpleados(newEmpleados);
    //console.log(newEmpleados);//
  }
}
