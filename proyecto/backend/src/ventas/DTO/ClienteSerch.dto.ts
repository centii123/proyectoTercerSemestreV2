import { IsOptional, IsNumber } from 'class-validator';

export class ClienteSerchDTO{
    @IsOptional()
    @IsNumber()
    cedula:number
}
