import { categoria_proveedor } from './categoria_proveedor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { documento_compra } from './documento_compra.entity';

@Entity()
export class proveedor {
  @PrimaryGeneratedColumn()
  id_prov: number;

  @Column({ type: 'varchar', length: 50 })
  nombre_prov: string;

  @Column({ type: 'int' })
  celular: number;

  @Column({ type: 'varchar', length: 50 })
  direccion: string;

  @OneToMany(() => documento_compra, (doc) => doc.id_compra, { cascade: true })
  id_compra: documento_compra;

  @ManyToOne(() => categoria_proveedor, (cat) => cat.id_prov, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_cat' })
  id_cat: categoria_proveedor[];
}
