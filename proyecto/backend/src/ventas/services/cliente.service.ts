import { ClienteRegisterDTO } from './../DTO/ClienteRegister.dto';
import { ClienteSerchDTO } from './../DTO/ClienteSerch.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cliente } from 'src/dataBase/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(cliente) private cliente: Repository<cliente>,
  ) {}

  async getCliente({ cedula }: ClienteSerchDTO) {
    const hol = await this.cliente.query(
      `SELECT * FROM cliente where cedula_cliente like '%${cedula}%' ORDER BY cedula_cliente LIMIT 5 OFFSET 0`,
    );
    if (hol.length == 0) {
      return new HttpException('no encontrado', HttpStatus.FOUND);
    }
    return hol;
  }

  async ClienteRegis(clienteRegis: ClienteRegisterDTO[]): Promise<object> {
    const cliente: cliente = await this.cliente.findOne({
      where: {
        cedula_cliente: clienteRegis['cedula_cliente'],
      },
    });
    if (cliente) {
      return new HttpException('el usuario ya existe', HttpStatus.FOUND);
    }

    const create: cliente[] = await this.cliente.create(clienteRegis);
    return await this.cliente.save(create);
  }
}
