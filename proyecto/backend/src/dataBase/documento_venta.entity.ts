import { empleados } from './empleados.entity';
import { detalle_venta } from './detalle_venta.entity';
import { cliente } from './cliente.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class documento_venta {
  @PrimaryGeneratedColumn()
  id_documento_venta: number;

  @Column({ type: 'date', default: () => 'NOW()' })
  fecha: Date;

  @Column({ type: 'decimal' })
  total: number;

  @ManyToOne(() => cliente, (Cliente) => Cliente.id_documento_venta, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'cedula_cliente' })
  cedula_cliente: cliente[];

  @ManyToOne(() => empleados, (em) => em.id_documento_venta, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'cedula_empleados' })
  cedula_empleados: empleados[];

  @OneToMany(() => detalle_venta, (Detalle) => Detalle.id_detalle_venta, {
    cascade: true,
  })
  id_detalle_venta: detalle_venta;
}
