import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { documento_compra } from './documento_compra.entity';
import { producto } from './producto.entity';

@Entity()
export class detalle_compra {
  @PrimaryGeneratedColumn()
  id_detalle: number;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'decimal' })
  importe: number;

  @Column({ type: 'decimal' })
  subtotal: number;

  @Column({ type: 'decimal' })
  iva: number;

  @Column({ type: 'varchar', length: 100 })
  tipo_producto: string;

  @ManyToOne(() => documento_compra, (doc_c) => doc_c.id_detalle, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_compra' })
  id_compra: documento_compra[];

  @ManyToOne(() => producto, (pro) => pro.id_detalle, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_prod' })
  id_prod: documento_compra[];
}
