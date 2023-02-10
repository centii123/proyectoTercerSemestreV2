import { Controller, Get } from '@nestjs/common';
import { RolService } from '../services/rol.service';

@Controller('rol')
export class RolController {
  constructor(private rolService: RolService) {}

  @Get()
  getRol() {
    return this.rolService.getRol();
  }
}
