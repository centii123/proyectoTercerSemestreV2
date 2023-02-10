import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { proveedor } from './proveedor.entity';

@Entity()
export class categoria_proveedor {
  @PrimaryGeneratedColumn()
  id_cat: number;

  @Column({ type: 'varchar', length: 20 })
  especializacion: string;

  @OneToMany(() => proveedor, (pro) => pro.id_prov, { cascade: true })
  id_prov: proveedor;
}
