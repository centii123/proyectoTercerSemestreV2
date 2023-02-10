import { producto } from './producto.entity';
import { documento_venta } from './documento_venta.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class detalle_venta {
  @PrimaryGeneratedColumn()
  id_detalle_venta: number;

  @Column({ type: 'varchar', length: 100 })
  descripccion: string;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'varchar', length: 100 })
  tipo_producto: string;

  @ManyToOne(() => documento_venta, (factura) => factura.id_detalle_venta, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_documento_venta' })
  id_documento_venta: documento_venta[];

  @ManyToOne(() => producto, (prod) => prod.id_detalle_venta, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_prod' })
  id_prod: producto[];
}
