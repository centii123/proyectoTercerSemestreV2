
import { IsOptional, IsString } from 'class-validator';

export class ProductSerchDTO{
    @IsOptional()
    @IsString()
    producto:string
}

export class ProductUpdate_DTO{
    "stock":number
}