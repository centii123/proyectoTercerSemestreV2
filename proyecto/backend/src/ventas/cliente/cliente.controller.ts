import { ClienteRegisterDTO } from './../DTO/ClienteRegister.dto';
import { ClienteSerchDTO } from './../DTO/ClienteSerch.dto';
import { Controller, Get, Post } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Query, UsePipes, Body } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('cliente')
export class ClienteController {

    constructor(public clientService:ClienteService){}

    @Get()
    @UsePipes(ValidationPipe)
    get(@Query() cedula:ClienteSerchDTO){
        let datos=this.clientService.getCliente(cedula)
        return datos
    }

    @Post()
    enviar(@Body() datosCliente:ClienteRegisterDTO[]){
        return this.clientService.ClienteRegis(datosCliente)
    }

}
