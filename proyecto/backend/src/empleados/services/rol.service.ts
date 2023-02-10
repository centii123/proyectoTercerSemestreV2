import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rol } from 'src/dataBase/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(rol)
    private rolRepository: Repository<rol>,
  ) {}

  async getRol() {
    return this.rolRepository.find();
  }
}
