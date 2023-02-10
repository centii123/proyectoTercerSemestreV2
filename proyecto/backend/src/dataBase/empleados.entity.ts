import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { documento_venta } from './documento_venta.entity';
import { documento_compra } from './documento_compra.entity';
import { rol } from './rol.entity';

@Entity()
export class empleados {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  cedula_empleados: string;

  @Column({ type: 'varchar', length: 25 })
  nombres: string;

  @Column({ type: 'varchar', length: 25 })
  apellidos: string;

  @Column({ type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar', length: 25 })
  clave: string;

  @OneToMany(() => documento_venta, (doc) => doc.id_documento_venta, {
    cascade: true,
  })
  id_documento_venta: documento_venta;

  @OneToMany(() => documento_compra, (doc) => doc.id_compra, { cascade: true })
  id_compra: documento_compra;

  @ManyToOne(() => rol, (ro) => ro.cedula_empleados, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: ' id_rol' })
  id_rol: rol[];
}
