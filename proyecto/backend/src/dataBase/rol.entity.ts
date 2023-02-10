import { empleados } from './empleados.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({ type: 'varchar', length: 100 })
  descripcion: string;

  @OneToMany(() => empleados, (em) => em.cedula_empleados, { cascade: true })
  cedula_empleados: empleados;
}
