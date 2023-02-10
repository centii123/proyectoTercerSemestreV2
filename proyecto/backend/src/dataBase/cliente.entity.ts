import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { documento_venta } from './documento_venta.entity';

@Entity()
export class cliente {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  cedula_cliente: string;

  @Column({ type: 'varchar', length: 100 })
  nombres: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @OneToMany(() => documento_venta, (factura) => factura.id_documento_venta, {
    cascade: true,
  })
  id_documento_venta: documento_venta;
}
