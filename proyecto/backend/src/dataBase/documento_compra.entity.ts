import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { detalle_compra } from './detalle_compra.entity';
import { empleados } from './empleados.entity';
import { proveedor } from './proveedor.entity';

@Entity()
export class documento_compra {
  @PrimaryGeneratedColumn()
  id_compra: number;

  @Column({ type: 'date', default: () => 'NOW()' })
  fecha_comra: Date;

  @Column({ type: 'date', default: () => 'NOW()' })
  fecha_pago: Date;

  @Column({ type: 'int' })
  total: number;

  @OneToMany(() => detalle_compra, (det) => det.id_detalle, { cascade: true })
  id_detalle: detalle_compra;

  @ManyToOne(() => proveedor, (prov) => prov.id_compra, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_prov' })
  id_prov: proveedor[];

  @ManyToOne(() => empleados, (prov) => prov.id_compra, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'cedula_empleados' })
  cedula_empleados: empleados[];
}
