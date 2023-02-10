import { ProductSerchDTO } from './../DTO/ProductDTO.dto';
import { Query, Param } from '@nestjs/common/decorators';
import { ProductsService } from './../services/products.service';
import { Controller, Get, ParseIntPipe, UsePipes, ValidationPipe, Put, Body } from '@nestjs/common';


@Controller('productos')
export class ProductosController {
    constructor(public ProductsSer:ProductsService){}

    @Get()
    @UsePipes(ValidationPipe)
    buscar(@Query() producto:ProductSerchDTO){
        
        return this.ProductsSer.serchProduct(producto)
    }

    @Get(':id')
    getproduc(@Param('id' , ParseIntPipe) id:number ){
            return this.ProductsSer.getproduct(id)
        
        
    }

    @Put(':idPro')
    updateProdu(@Param('idPro',ParseIntPipe) idPro:number, @Body() stock){
        return this.ProductsSer.updateStockProuct(idPro,stock)
    }
}
