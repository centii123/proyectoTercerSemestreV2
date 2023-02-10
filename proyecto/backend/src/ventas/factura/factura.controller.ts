
import { Detalle_ventaDTO } from './../DTO/Detalle_venta.dto';
import { DetalleVentaService } from './../services/detalle_venta.service';
import { Body} from '@nestjs/common/decorators';
import { DocumentoVentaService } from './../services/documento_venta.service';

import { Controller, Post, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('factura')
export class FacturaController {

    datosregisterdocumento;
    datosregisterdetalleVenta:Detalle_ventaDTO;
    constructor(private documentoVenta:DocumentoVentaService, private detalleVenta:DetalleVentaService){}

    @Get('/ultimo')
    verUltimoId(){
        return this.documentoVenta.obtenerUlRegistro()
    }

    @Get('/fecha/:id')
    fecha(@Param('id',ParseIntPipe) id_doc:number){
        return this.documentoVenta.obtenerfecha(id_doc)
    }


    @Post('/detalle')
    async postdet(@Body() datos):Promise<object>{
        this.datosregisterdetalleVenta={
            descripccion:datos['descripccion'],
            cantidad:datos['cantidad'],
            tipo_producto:datos['tipo_producto'],
            id_prod:datos['id_prod'],
            id_documento_venta:datos['id_documento_venta']
        }
            await this.detalleVenta.registrardetalle(this.datosregisterdetalleVenta)

            let estado={estado:"registrado"}
        return estado
    }

    @Post('/documento')
    async postdoc(@Body() datos):Promise<object>{
        this.datosregisterdocumento={
            total:datos['total'],
            cedula_cliente:datos['cedula_cliente']
        }
            await this.documentoVenta.registrardoc(this.datosregisterdocumento)

            let estado={estado:"registrado"}
            return estado
    }


}
